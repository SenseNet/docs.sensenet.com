---
title: Query system content
metaTitle: "sensenet API - Query system content"
metaDescription: "Query system content"
---

If `Autofilters` is on, result list will not contain system or deleted content (currently in trash). For example content in system folder will not be returned. If you want to switch this filter on, do it this way:

<tab category="querying" article="query-system-content" example="autofilters" />

The following contents will be filtered out from the results if `Autofilters` is on:

- system files (all content with the type SystemFile)
- System Folders and all content below them (even if the children are not system files)
- content in the Trash
