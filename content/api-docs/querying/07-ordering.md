---
title: Ordering
metaTitle: "sensenet API - Ordering"
metaDescription: "Order content with sensenet API"
---

# Ordering the results

There are a couple of query options that gives you control over how your results are ordered.

Two keywords exist for defining sorting in a query text:

- .SORT
- .REVERSESORT

You can use both to name one or more fields. Results will be returned in the given order (ascending or descending, depending on the given keyword).

<note title="Limitation" severity="info">
Please note that sorting works on those indexed fields of the content that the query could be executed on. This means you cannot sort the results by a referenced content's fields. For example it is not possible to sort books based on the referenced authors' origin country.
</note>

# Order by a field - lowest to highest

Following query returns the cars ordered by their name:

<tab category="querying" article="query-ordering" example="lowestToHighest" />

# Order by a field - highest to lowest

The next example query returns the same content as the above one but in reverse order:

<tab category="querying" article="query-ordering" example="highestToLowest" />

# Order by multiple fields

Following query example shows how to order results by multiple fields, in this case cars by their color and name:

<tab category="querying" article="query-ordering" example="byMultipleFields" />

# Order by multiple fields in different directions

In the following examples we combine all the things above with sorting cars first by then by their color in reverse order and the name in ascending order.

<tab category="querying" article="query-ordering" example="multipleFieldsAndDirections" />

# Order by date

Ordering cars by their `StartingDate` field:

<tab category="querying" article="query-ordering" example="byDate" />
