---
title: Select and expand
metaTitle: "sensenet API - Select and Expand"
metaDescription: "How to work with a selection of metadata and referenced content"
---

# Select and expand fields

sensenet OData API gives you full control over the amount of metadata you are working allowing you to reduce the size of data response and load the value of only those fields which are needed.

Expanding a field lets you work with referenced content's metadata, which means if you're looking for the creator users avatar or the path of a related content you don't have to send another request to the user or the document, but to expand the field.

# Select

Specifies the displayed properties in a comma separated list of the property names. Property names are case sensitive.

<note title="Limitation" severity="info">A select clause can be only a property name. Expressions in select clauses are not yet supported in sensenet.</note>

Without this option the result will contain all available properties. In case of one entry, the available property set is the entry's all fields. In case of collection all fields of the available content in the collection.

<tab category="basic-concepts" article="select-expand" example="select" />

# Expand

According to the [OData](https://www.odata.org/) protocol the `$expand` option indicates that a related item should be represented inline in the response with full content instead of as a simple link. In our case this means that any Reference Field can be expanded allowing you to get metadata of a content and one or more related content with a single HTTP request.

The value provided in the `$expand` option is a comma separated list of navigational properties (in sensenet these are reference fields). `$expand` option works with a collection or with a single content request as well. You may indicate that you want to expand one or more fields (e.g. `ModifiedBy` and `CreatedBy` at the same time).

<tab category="basic-concepts" article="select-expand" example="expand" />

You may even expand fields of expanded content by providing a 'field name chain', separated by slashes (e.g. `CreatedBy/CreatedBy`).

<tab category="basic-concepts" article="select-expand" example="expandExpanded" />

It is possible to specify the list of fields the response should contain. This works with expanded properties as well: you may specify which fields of the expanded content should be added to the response by providing a 'field name chain', separated by slashes (e.g. `$select=CreatedBy/DisplayName`).

<tab category="basic-concepts" article="select-expand" example="expandAndSelect" />

If you do not provide a `$select` option in the request, all the field values will be returned of the requested and the expanded content as well.

If the `$select` option contains an expanded navigation property (e.g. `Manager/FullName`), the affected property must be included in the `$expand` option otherwise the response will be an error object.

```json
{
  "error": {
    "code": "InvalidSelectParameter",
    "message": {
      "lang": "en-us",
      "value": "Bad item in $select: Manager/FullName"
    }
  }
}
```

Additionally, you may expand the following special fields as well:

- `AllowedChildTypes`: list of available content types in a container

<tab category="basic-concepts" article="select-expand" example="expandAllowedChildTypes" />

- `Actions`: list of available HTML actions

<tab category="basic-concepts" article="select-expand" example="expandActions" />
