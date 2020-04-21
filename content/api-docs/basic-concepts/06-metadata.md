---
title: Metadata
metaTitle: sensenet API - Metadata
metaDescription: Metadata OData option
---

# Metadata

This option controls the metadata content in output entities. It is invented for development purposes, most of the cases setting its value to reduced or hidden is sufficient and it also improves output readability.

There are three types of metadata:

- **full** (default): the output contains the whole metadata.
- **minimal**: output's entity metadata contains only self URI and type name (actions and functions are hidden).
- **no**: the output does not contain entity metadata.

Following returns an entity without metadata content:

<tab category="basic-concepts" article="metadata" example="metadata" />

# $metadata

If the resource is `$metadata`, the server returns the Service Metadata Document that exposes the data model of the service in XML or JSON. This document is the global (static) metadata that cannot contain content specific information e.g. expando (Content List) fields.

<tab category="basic-concepts" article="metadata" example="global-metadata" />

Instance specific metadata is available on a collection or entity: in this case the resource URI needs to end with the "/$metadata" segment.

<tab category="basic-concepts" article="metadata" example="doclib-metadata" />
