---
title: Ordering and Pagination
metaTitle: "sensenet API - Ordering and Pagination"
metaDescription: "Order content with sensenet API"
---

# Ordering and pagination for results

There are a couple of query options that gives you control over your results and how they are ordered. With them you can not only able to create collection results that are sorted in the required order but to implement paging functionality using the `$top` and `$skip` options.

# Ordering

With the `$orderby` property you are able to sort collection results by one or more properties and forward or reverse direction. You can specify as many fields as you want.

You can use the orderings option to order your results by a certain field. By default it will sort the field from the lowest value to the highest.

The following examples shows how to sort the results by the `DisplayName` field:

<tab category="basic-concepts" article="ordering-paging" example="orderByOneProperty" />

# Order by a field in an explicit direction

The following examples shows how to sort the results by the `Price` field from lowest to highest:

<tab category="basic-concepts" article="ordering-paging" example="orderExplicitDirection" />

# Order by a field in reverse order

The following example shows how to sort the results by the `StartingDate` field from closest to earliest:

<tab category="basic-concepts" article="ordering-paging" example="reverseOrder" />

# Order by a multiple fields

You can specify multiple fields to sort the order of your results by. The results will be ordered first by the first field specified. If any of those values are equal, then those results will be sorted by the next specified field. And so on.

Here is an example that will order the results first by the last modification date of the docs from closest to earliest. It will then sort any docs that have the same `StartingDate` by their `DisplayName`.

<tab category="basic-concepts" article="ordering-paging" example="orderByMultipleFields" />

# Top

With the `$top` option you can limit collection results.

<tab category="basic-concepts" article="ordering-paging" example="top" />
&nbsp;
<note>Negative value causes error. Zero value means "no top".</note>

# Skip

`$skip` option is for hiding the first given number of elements from the result.

<tab category="basic-concepts" article="ordering-paging" example="skip" />
&nbsp;
<note>Negative value causes error. Zero value means "no skip".</note>

# Pagination

In case of paging the `$top` option defines the maximum number of documents that the API will return for your query so that the number of docs that will be listed on a page and `$skip` defines how many docs will be skipped.

Following example demonstrates how to query the second page of a folder list with 3 folders on a page.

<tab category="basic-concepts" article="ordering-paging" example="paging" />
