---
title: Query by Id or Path
metaTitle: "sensenet API - Query by Id or Path"
metaDescription: "How to query content by Id or Path"
---

Let's see what do you need to query a document by its `Id` or `Path`.

# Query a content by its Id

Following example shows how to query the document with the `Id` `1607`.

<tab category="querying" article="query-by-id-path" example="byId" />

# Query multiple content by their Ids

The next example shows how to query multiple documents by Id's `1607`, `1640` and `1645`.

<tab category="querying" article="query-by-id-path" example="byMultipleIds" />

# Search in a folder

You can specify a folder to search in using the `InFolder` param and the chosen parent's `Path` as its value in the query.

Following query returns the children of the folder named Calgary:

<tab category="querying" article="query-by-id-path" example="inFolder" />

# Search in a branch of the content tree

You can also specify a branch of the content repository to search in using the `InTree` param and the `Path` of the root content of the chosen branch.

Following query returns all the content items which are stored in the IT workspace's document library even if they are stored in lower level folders:

<tab category="querying" article="query-by-id-path" example="inTree" />
