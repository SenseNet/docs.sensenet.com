---
title: Query by related content
metaTitle: "sensenet API - Query by related content"
metaDescription: "Query by related content"
---

There are cases when you want to filter content by a linked content stored in their reference fields. For example you want to look for memos created by developer users. This query cannot be designed as a simple query for memos, because the jobtitle of a creator is stored (therefore indexed) on the user content. First you'll have to collect all the users with the same jobtitle then execute a second query for memos of these creator users. This is where inner query comes in: it is possible to construct and execute a query like this in a single, compact statement.

Following query returns all the users whose manager's username is businesscat:

<tab category="querying" article="query-by-references" example="byManager" />

Inside the curly brackets there's a regular query for users - that is what we call inner query. When you execute a query like this, the system executes the inner query first and it results in a list of users. Their id will be inserted automatically into the outer query as an OR expression:

```+CreatedBy:(1495 1496)```

So every inner query will actually mean executing two queries: first the inner query (or queries) then the outer one. This is the way you can construct queries described above.
