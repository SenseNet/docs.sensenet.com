---
title: Saved queries
metaTitle: "sensenet API - Saved queries"
metaDescription: "sensenet API - Saved queries"
---

For empower teamwork and make users life easier in sensenet is possible to save queries. It is useful if you have recurring tasks with the same result sets and you need to work with the up-to-date result lists without writing the fitting queries every time. It is also useful if you want to share your result set with another users because the queries could be saved as private or public ones.

# Save a query

As everything else in sensenet, queries are also contents made with a special content type `Query`. Since saving queries is a feature that has specific underlying business logic related to its sharing level, it is not a simple save. As you can see in the next example you have to add a name for it and if you don't set the `queryType` param, the saved query will be public (saved to the next parent workspace's `Queries` folder)

<tab category="collaboration" article="saved-queries" example="saveQuery" />

# Save a private query

A private query means it will be available only for the current user because these type of queries are saved to the current user's user profile (by the way it is a workspace too). With the next example you will save a private query:

<tab category="collaboration" article="saved-queries" example="savePrivateQuery" />

# Get saved queries

With GetQueries you cam get Query content that are relevant in the current context. The result set can contain both private and public queries, but you can filter by type adding the param `onlyPublic`. In the next example you can see how to get only the private queries:

<tab category="collaboration" article="saved-queries" example="getSavedQueries" />
