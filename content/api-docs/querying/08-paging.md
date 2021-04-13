---
title: Paging
metaTitle: "sensenet API - Paging"
metaDescription: "Paging content with sensenet API"
---

# Paging the results

There are a couple of query options that gives you control over your results and how they are ordered. With them you can not only able to create collection results that are sorted in the required order but to implement paging functionality using the `TOP` and `SKIP` keywords.

# Limit result count

In most of the cases you will not need all of the content but only a few of them. Following example shows you how to get only the first 10 element in your queries result list:

<tab category="querying" article="query-paging" example="top" />
&nbsp;
<note severity="error">
Always use the TOP keyword whenever limiting result count is possible. TOP limits the size of temporary result arrays used in background query execution logic. Not providing .TOP keyword may result in unnecessary memory consumption and unreasonably high intensity GC usage!
</note>

# Jump to page

In case you want to display a few content but not the first ones (for example in a pageable list of documents), use the keyword `SKIP`. The query below will skip the first 3 results and will return the second 3:

<tab category="querying" article="query-paging" example="skip-and-top" />
