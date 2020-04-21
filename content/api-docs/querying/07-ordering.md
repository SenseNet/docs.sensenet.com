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

Following query returns the folders ordered by their name:

<tab category="querying" article="query-ordering" example="lowestToHighest" />

# Order by a field - highest to lowest

The next example query returns the same content as the above one but in reverse order:

<tab category="querying" article="query-ordering" example="highestToLowest" />

# Order by multiple fields

Following query example shows how to order results by multiple fields, in this case folders by their name and index fields:

<tab category="querying" article="query-ordering" example="byMultipleFields" />

# Order by multiple fields in different directions

In the following examples we combine all the things above with sorting folders first by their Name and then by their index in reverse order.

<tab category="querying" article="query-ordering" example="multipleFieldsAndDirections" />

# Order by date

Ordering content items by their creation or last modification date is one of the most common query types. Let's see how you can order the files in a folder by the files' last modification:

<tab category="querying" article="query-ordering" example="byDate" />
