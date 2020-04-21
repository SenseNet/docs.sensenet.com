---
title: Entry
metaTitle: "sensenet API - Entry"
metaDescription: "How to get a single entry from sensenet content repository"
---

# Get a single content

The requested resource can be any content in the repository that is permitted for the current user. The resource may be addressed with a content's Path or Id. It returns one entity and all its properties.

If the requested resource is not found, the server returns a 404 Error status code.

# Get a single content by Id

In this case the URL must satisfy a strict rule: the service path followed by `/content` (case insensitive) and content Id wrapped in parentheses without whitespaces.

<tab category="basic-concepts" article="entry" example="byId" />

# Get a single content by Path

In this case the URL is the service path followed by the path of the parent and an entity name wrapped by apostrophes and parentheses.

<tab category="basic-concepts" article="entry" example="byPath" />

# Addressing a single property of a content

Any property of a content entity can be addressed in the following way:

<tab category="basic-concepts" article="entry" example="property" />

This returns the following response:

```json
{
  "d": {
    "DisplayName": "Document Workspaces"
  }
}
```

# Addressing a property value

Raw value of a property can be accessed if the request is extended with the `/$value` parameter.

<tab category="basic-concepts" article="entry" example="propertyValue" />

This returns the following response:

```Document Workspaces```

# Accessing binary stream

Binary data (value of a binary field) is represented by an [OData Named Resource Stream Value](https://www.odata.org/documentation/odata-version-3-0/json-verbose-format/) stream value. The `media_src` and `content_type` properties are filled with proper values, while the `edit_media` and `media_etag` properties are not supported. Check the "Binary" property of the following response as an example:

```json
{
  "d": {
    "__metadata": {
      "uri": "/OData.svc/Root/Content/IT/Document_Library('Aenean semper.doc')",
      "type": "File"
    },
    ...
    "Binary": {
      "__mediaresource": {
        "edit_media": null,
        "media_src": "/Root/Content/IT/Document_Library/Aenean semper.doc",
        "content_type": "application/msword",
        "media_etag": null
      }
    },
    ...
```
