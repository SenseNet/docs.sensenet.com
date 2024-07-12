---
title: Query by Type
metaTitle: "sensenet API - Query by Type"
metaDescription: "Query by Type"
---

Since sensenet supports content type inheritance there are two ways to query items by their types.

# Query by a type

The following example shows how to get items with an exact type (`Car`) skipping the contents with one of the inherited types.

<tab category="querying" article="query-by-type" example="byExactType" />

# Query by a type and its subtypes

In most of the cases you will query by type family (by a content type and all of its inherited ones).

The response of the following example will return every content with the type `Folder` or any inherited type.

<tab category="basic-concepts" article="query-by-type" example="byTypeFamily" />
