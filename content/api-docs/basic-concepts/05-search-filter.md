---
title: Search and filtering
metaTitle: "sensenet API - Search and filtering"
metaDescription: "Search and filtering through sensenet API"
---

# Search and filtering

You can use a variety of query parameters to search and filter items in the response from any collection including folders, documents, images, content types, users or any other content with built-in or custom content type.

# Filtering

The `$filter` option defines a subset of the entries from a specified collection. The filter expression can contain global functions and operations according to the [OData](https://www.odata.org/documentation/odata-version-2-0/uri-conventions/) standard.

<note title="Filtering only works on children">Our repository is tree-based and not table based. So our collections are not only tables as typed collections rather children of a tree node. As the collection request returns a container's children, `$filter` option is working only on children items.</note>

# Filtering by Field value

The following example returns the items that have an Index greater than 11.

<tab category="basic-concepts" article="search-filter" example="greaterThan" />

The following example returns true if the Description field (given as second param) contains the given string.

<tab category="basic-concepts" article="search-filter" example="substringof" />

The following example returns true if the given Name field starts with the given string.

<tab category="basic-concepts" article="search-filter" example="startswith" />

The following example returns true if the given Name field ends with the given string.

<tab category="basic-concepts" article="search-filter" example="endswith" />
&nbsp;
<note title="Filtering does not work on reference properties" severity="error">In sensenet filtering for reference fields is not available so this type of filters will be skipped.</note>
&nbsp;
<note title="Do not use relational database specific operations in a filter" severity="error">
Since the search engine of sensenet is based on Lucene.NET, it is text based and not a relational one. Because of that you cannot use two or more fields in one logical operation, and cannot perform operations on fields. For example: comparing values of two fields or executing field operations in terms.
</note>

# Filtering by Date

Following example returns the documents that were uploaded after the given date.

<tab category="basic-concepts" article="search-filter" example="byDate" />

# Filtering by an exact Type

Since sensenet supports content type inheritance there are two ways to filter items by their types.

The following example shows how to get items with an exact type skipping the contents with one of the inherited types.

<tab category="basic-concepts" article="search-filter" example="byExactType" />

# Filtering by Type family

In most of the cases you will use the `IsOf()` operation to filter by type family (by a content type and all of its inherited ones).

The response of the following example will return every content with the type Folder or any inherited type.

<tab category="basic-concepts" article="search-filter" example="byTypeFamily" />

# Query option

There is a reserved custom query option: `query` (without "$" prefix) that helps to get filtered collection of entities with Content Query. The scope of the query is the subtree with requested entity as a root.

<note title="Performance considerations">Do not forget that querying on huge collections may impact server performance. Always use limiters when using the queries in such cases. If you use the custom `query` option use the CQL limiters and sorting in the `query` option (.TOP .SKIP) instead of using the OData ones ($top, $skip, $orderby).</note>

Check the next big section of docs about querying in details [HERE](/querying).
