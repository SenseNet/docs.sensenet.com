---
title: Querying
metaTitle: "sensenet API - Querying"
metaDescription: "How to query the API"
---

# How to query the API

One of the main features of sensenet is content query. sensenet content repository is a query based system, which means every content or image you see on the portal is collected by a very sophisticated and fast query engine.

As an end-user, developer or administrator you get the simple but powerful content query language (CQL), that can be used to find, filter and sort content even in a huge and constantly expanding repository.

# CQL - The basics

sensenet uses the [Lucene search engine](http://lucene.apache.org/) for indexing and searching for content. We fully support the original Lucene syntax, but extended it with our own keywords for sorting and filtering, thus forming the content query language (CQL).

In most cases you want to look for a single term or a phrase, which is a group of words surrounded by double quotes ("apple pie"). In these cases sensenet will look for contents that have these words in their default index data that contains all the relevant text of the content.

In more complex situations you may need some filtering based on the type or place of the content you are looking for, or you want to search in a specific field. With the followings you can learn how to create more complex queries and use them effectively finding content even in a huge repository.

# Wildcard search

sensenet supports single and multiple character wildcard searches within single terms.

Following returns content containing the word *truck* or *trunk*:

<tab category="querying" article="query" example="wildcard-search-single" />

Following returns content containing the word *apple* or *application*:

<tab category="querying" article="query" example="wildcard-search-multiple" />

# Fuzzy search

You can search for similar words based on Lucene's Fuzzy search. Fuzzy search is a simple term with  "~" and a small number (0 < n < 1) as a suffix. (Fuzzy search uses Levenshtein or Edit Distance algorithms under the hood.)

With the following query example you can find documents that contain a word differing only in one character from "abbreviate" e.g. *abreviate*, *sbbreviate* etc.

<tab category="querying" article="query" example="fuzzy-search" />

# Proximity search

It is possible to limit the distance between the given words in the result documents. The proximity search is two word in quotes followed by a "~" character and a positive whole number. This number defines the maximal count of words between the given two word.

Following query will find the content with the text *Lorem ipsum dolor sit amet*, because there are 3 words between the words *Lorem* and *amet*.

<tab category="querying" article="query" example="proximity-search" />

# Keywords

In sensenet query language there are several keywords that you can use to make the query more specific, defining order or paging.

All keywords must be specified using the following syntax: `.KEYWORD:VALUE`

A keyword:
- starts with a dot (.)
- is uppercase
- is followed by a colon and the value

# Escaping special characters

Lucene query supports escaping special characters that are reserved in the query syntax. Reserved characters are:

```&& + -  || ! ( ) { } [ ] ^ " ~ * ? : \```

To escape one of these characters use a `\` before the character.
For example to search in a folder called (5+5-3), you can use the query:

<tab category="querying" article="query" example="special-characters-escaping" />

You can also create phrases by adding apostrophes around words. So if you want to search for (1+1):2, you can use the query:

<tab category="querying" article="query" example="special-character-apostrophe" />

# Quick queries

When content items are being created or changed, these changes need to be updated in the index. In cases when it is not necessary for the query results to reflect these changes immediately, you can perform quick queries that will be executed without making the index reader up-to-date.

Following is an example of CQL syntax for executing a quick query:

<tab category="querying" article="query" example="quick-query" />
