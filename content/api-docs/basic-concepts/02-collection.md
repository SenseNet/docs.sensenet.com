---
title: Collection
metaTitle: "sensenet API - Collection"
metaDescription: "How to get children of a content from sensenet content repository"
---

# Get children of a content

The requested (parent) resource can be any content in the repository that is permitted for the current user. The resource may be addressed with a content's Path. It returns a list of child entities and all their properties.

If the requested (parent) resource is not found, the server returns a 404 Error status code.

# Children of a content (collection)

Service path followed by the path of the container returns child content of the requested parent as a collection.

<tab category="basic-concepts" article="collection" example="children" />

# Count of a collection

Returns the count of items in the requested collection. The value depends on other optional query string parameters ($top, $skip, $filter, query, etc.) and does not depend on the [$inlinecount](#inlinecountqueryoption) parameter.

<tab category="basic-concepts" article="collection" example="count" />

This returns a raw integer value.

# inlinecount query option

The $inlinecount option controls the `__count` property's value that can be found in every collection response. Its valid values are: `allpages` and `none` (other value causes an error, default value is `none`).

**allpages**: count of the whole set (filter, top, skip options are ignored)
**none**: result shows the actual count of items (`__count` property is not hidden)

<tab category="basic-concepts" article="collection" example="inlinecount" />
