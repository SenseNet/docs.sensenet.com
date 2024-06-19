---
title: Template parameters
metaTitle: "sensenet API - Template parameters"
metaDescription: "Using template parameters"
---

# Using template parameters

You can use parameters in your query text that will be replaced by sensenet in the background. This lets you create dynamic queries. For example it is possible to present the top 5 news of the day or listing the content modified by the currently logged in user.

The usage of parameters is easy: just put them into the query between double @@ signs:

```ModifiedBy:@@CurrentUser@@```

# List of built-in template parameters

These are the built-in parameters that you can use in your queries:

| Parameter name | Description |
| -------------- | ----------- |
| **CurrentUser** | Represents the currently logged in user |
| **CurrentDate** | Current date, meaning the very start of the day, e.g.:9/17/2010 00:00:00 |
| **CurrentTime** | Current time, e.g.:10/23/2010 14:30:00 |
| **CurrentMonth** |	Current month |
| **CurrentContent** |	Current content |
| **Today**	| Equivalent to CurrentDate and CurrentDay: represents the start of the current day (00:00 AM). |
| **Yesterday**	| Start of the previous day. |
| **Tomorrow**	| Start of the next day. |
| **CurrentWeek**	| Start of the current week. This builds on the first weekday defined by the current culture (which is Sunday in some cultures, Monday in others). |
| **CurrentMonth**	| Start of the current month. |
| **CurrentYear**	| Start of the current year. |
| **NextWorkday**	| Start of the next workday. It skips weekends but it does not know anything about holidays. |
| **NextWeek**	| Start of the next week. This builds on the first weekday defined by the current culture. |
| **NextMonth**	| Start of the next month. |
| **NextYear**	| Start of the next year. |
| **PreviousWorkday**	| Start of the previous workday. It skips weekends but it does not know anything about holidays. |
| **PreviousWeek**	| Start of the previous week. This builds on the first weekday defined by the current culture. |
| **PreviousMonth**	| Start of the previous month. |
| **PreviousYear**	| Start of the previous year. |

Let's see some examples.

The following example results the car content modified with the current user:

<tab category="querying" article="query-template-parameters" example="sharedWithCurrentUser" />

See another example query that returns the list of today's events:

<tab category="querying" article="query-template-parameters" example="todaysEvents" />

# Templates with properties

If the parameter represents another content (like CurrentUser), you can use any field of that content by naming it after the parameter and a dot (. sign):

The following query returns every task that is created by the current user and has its due date in the next week:

<tab category="querying" article="query-template-parameters" example="nextWeekTasksOfAUser" />
&nbsp;
<note severity="info">
Notice the apostrophes around the template. Since a path may contain characters like '-' that are special characters in the query language, it is best to put templates like this inside quotation marks.
</note>

Properties can also be chained like in the next example where we query for get the list of users who where created before the current user's manager was:

<tab category="querying" article="query-template-parameters" example="chainingProperties" />

# Template expressions

You can also use simple value modifiers (a '+' or '-') in template values (e.g. dates or numbers). This is extremely useful in case of dates, when you want your query to contain dates in the past or future. You may use any one of the date templates above, or any content property that is a date or number.

For example lets see how to get the list of items that were created in the last five days:

<tab category="querying" article="query-template-parameters" example="template-expressions" />

It can also be used in a method-like syntax:

<tab category="querying" article="query-template-parameters" example="template-expressions-methodlike" />

The following list contains the units you may use in an expression (with a shortcut in parenthesis if exists):

```seconds (s), minutes (m), hours (h), days (d), workdays, months, weeks, years (y)```
