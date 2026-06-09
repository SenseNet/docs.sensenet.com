# Dockerfile for docs.sensenet.com (Gatsby 2.x) – multi-stage build
#
# ── Stage 1 (builder) ─────────────────────────────────────────────────────────
#   Builds the static site.  Build secrets (API keys) are only present in this
#   stage and are NEVER pushed to the registry.
#
# ── Stage 2 (runner) ──────────────────────────────────────────────────────────
#   Copies only the generated public/ folder into a minimal nginx image.
#   No Node, no source, no secrets – this is the image that gets published.
#   nginx starts in milliseconds, so container replacement is near-instant.

# ── Stage 1: build ────────────────────────────────────────────────────────────
FROM node:16-bullseye-slim AS builder

# Native build tools required by some Node packages (sharp, canvas, etc.)
RUN apt-get update && apt-get install -y --no-install-recommends python3 make g++ \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install dependencies (cached unless package.json / yarn.lock changes)
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy source; strip any local .env files that may have been left in the tree
COPY . .
RUN rm -f .env .env.local .env.production .env.development .env.test

# ── Build-time environment variables ─────────────────────────────────────────
# Values arrive via --build-arg (docker compose reads them from .env).
# They are baked into the generated JS bundles – GATSBY_* vars are always
# client-side by design.  The builder stage stays local / in CI and is never
# pushed to the registry, so the values don't leak through Docker Hub.
ARG GATSBY_ALGOLIA_APP_ID
ARG GATSBY_ALGOLIA_SEARCH_KEY
ARG GATSBY_ALGOLIA_ADMIN_KEY
ARG GOOGLE_TAG_MANAGER_ID
ARG SEGMENT_PRODUCTION_WRITE_KEY

ENV GATSBY_ALGOLIA_APP_ID=$GATSBY_ALGOLIA_APP_ID \
    GATSBY_ALGOLIA_SEARCH_KEY=$GATSBY_ALGOLIA_SEARCH_KEY \
    GATSBY_ALGOLIA_ADMIN_KEY=$GATSBY_ALGOLIA_ADMIN_KEY \
    GOOGLE_TAG_MANAGER_ID=$GOOGLE_TAG_MANAGER_ID \
    SEGMENT_PRODUCTION_WRITE_KEY=$SEGMENT_PRODUCTION_WRITE_KEY

RUN yarn gatsby build

# ── Stage 2: serve ────────────────────────────────────────────────────────────
FROM nginx:1.27-alpine AS runner

# Only the compiled static files are copied – no Node, no source, no secrets
COPY --from=builder /app/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

HEALTHCHECK --interval=15s --timeout=5s --start-period=5s --retries=3 \
    CMD wget -q --spider http://localhost/ || exit 1

EXPOSE 80

