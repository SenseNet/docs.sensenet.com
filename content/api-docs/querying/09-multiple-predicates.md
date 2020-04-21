---
title: Multiple predicates
metaTitle: "sensenet API - Multiple predicates"
metaDescription: "Query by multiple predicates"
---

# Operators

Operators allow terms to be combined through logical operators. sensenet query language supports AND, "+", OR, NOT and "-" as Boolean operators (boolean operators must be ALL CAPS like keywords).

The `OR` operator is the default conjunction operator. This means that if there is no operator between two terms, the `OR` operator is used. The `OR` operator links two terms and finds a matching document if either of the terms exist in a document. This is equivalent to a union using sets.

<tab category="querying" article="query-multiple-predicates" example="or" />

The `AND` operator matches documents where both terms exist anywhere in the text or fields of a single document. To search for event that have the type demo or meeting in the field EventType, use this query:

<tab category="querying" article="query-multiple-predicates" example="and" />

The + or required operator requires that the term after the "+" symbol exist somewhere in a the field of a single document.

To search for content that must contain meeting type events and may contain demo events use the query:

<tab category="querying" article="query-multiple-predicates" example="plus" />

The `NOT` operator excludes content that contain the term after `NOT`. (It cannot be used with only one term.)

<tab category="querying" article="query-multiple-predicates" example="not" />

The "-" or prohibit operator excludes documents that contain the term after the "-" symbol.

To search for content that contain "apple" but not "melon" use the query:

<tab category="querying" article="query-multiple-predicates" example="minus" />

# Grouping

sensenet query language supports use of parentheses to group clauses and form sub queries.

Following query demonstrate how you can group multiple predicates:

<tab category="querying" article="query-multiple-predicates" example="grouping" />
