---
title: Query by date
metaTitle: "sensenet API - Query by date"
metaDescription: "Query by date"
---

# Query by an exact date

You can query by date fields the same way as you do it in case of other field types. The only difference is that the value should be a date string that match the format `YYYY-MM-DD HH:mm:ss`.

The following example returns the Contents that have "StartingDate" field value equal to the specified date.

<tab category="querying" article="query-by-date" example="byExactDate" />

The next query is an example that shows you how to get the Contents that have "StartingDate" field value equal to the specified date and time.

<tab category="querying" article="query-by-date" example="byExactDateTime" />

# Query before or after a specific date

You can also use operators in queries by date fields to search before or after a certain date.

Following query returns the list of Contents that have `StartingDate` field value before the specified date and time.

<tab category="querying" article="query-by-date" example="byDateBefore" />

Next example returns the Contents that have `StartingDate` field value after the specified date and time.

<tab category="querying" article="query-by-date" example="byDateAfter" />

# Query by a date range

Range queries allow you to query contents thats' field(s) values are between the given lower and upper bound specified by the query. Range queries can be inclusive or exclusive at the upper and lower bounds (inclusiveness is given by square brackets `[]` and exclusiveness by curly brackets `{}`). As you will see in the examples below, the two types can also be mixed.

The following example query returns Contents with `StartingDate` between the two given dates including the given first and last dates.

<tab category="querying" article="query-by-date" example="byExclusiveRange" />

The following example query returns Contents with `StartingDate` between the two given dates excluding the given first and last dates.

<tab category="querying" article="query-by-date" example="byInclusiveRange" />

The following example query returns Contents with `StartingDate` between the two given dates including the first and excluding the given last date.

<tab category="querying" article="query-by-date" example="byMixedRange" />

# Querying with dynamic template parameters

Using template parameters helps you to use dynamic values in queries. For further information and full list of the available template parameters see the [related docs](/api-docs/querying/11-template-parameters#listofbuilt-intemplateparameters) and for some date query related help see the following examples.

This query returns the contents modified yesterday:

<tab category="querying" article="query-by-date" example="byYesterday" />

Following example shows how to get the list of next month's event contents:

<tab category="querying" article="query-by-date" example="byNextMonth" />

The following query returns the list of contents created in the last year:

<tab category="querying" article="query-by-date" example="byPreviousYear" />

# Query by lifespan validity

In some content management scenarios contents have lifespan information. This means the content is created but will be valid or available only on a defined date in the future and it may become invalid on another date. See lifespan in details in the [related doc at the API basic concepts](/api-docs/basic-concepts/08-lifespan).

Lifespan filtering is turned off by default. If you want to get results depending on the lifespan status of content (value of its `ValidFrom` and `ValidTill` fields), you can switch this filter on in your query as you can see in the following example:

<tab category="querying" article="query-by-date" example="byLifespan" />
