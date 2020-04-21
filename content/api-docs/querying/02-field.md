---
title: Query by a field
metaTitle: "sensenet API - Query by a field"
metaDescription: "Query by a field"
---

# Define queryable fields

You can define which fields should be saved to the index by marking them in the related content type at the chosen field's definition.

It is also possible to switch off indexing for certain content types. In that case nobody will be able to find the instances made with those content types using queries, and the index will be smaller.

About the possible indexing configurations and field definition see the [schema](/concepts/content-model) and the [content type concepts](/concepts/content-types).

Basically query by a field works by adding the chosen field name to the query with a value that you are looking for:

```query=[FieldName]:[value]```

Field names are always case sensitive but values are not. The following queries return the same result:

```query=Name:saturn```
&nbsp;
```query=Name:SaTUrn```

In the following examples you will see how you can query by the most common fields.

# Query by a text field

The following query returns the content that's Name is BusinessPlan.docx

<tab category="querying" article="query-by-field" example="byShortText" />

Following query returns the content that's Description field contains the word 'company' (notice that it is actually a [wildcard search](/querying#wildcardsearch))

<tab category="querying" article="query-by-field" example="byLongText" />

# Query by a number field

Following example shows how to get the list of tasks that's completion rate is lower than 50% (their Completion field's value is less than 50):

<tab category="querying" article="query-by-field" example="byNumber" />

# Query by a boolean field

You can also query by a boolean field as it is shown in the following example. The query returns the list of critical workspaces (e.g. content that's IsCritical field's value is `true`).

<tab category="querying" article="query-by-field" example="byBoolean" />
