---
title: Entry
metaTitle: "sensenet API - Entry"
metaDescription: "How to get a single entry from sensenet content repository"
---

# Get a single content

The requested resource can be any content in the repository that is permitted for the current user. The resource may be addressed with a content's Path or Id. It returns one entity and all its properties.

If the requested resource is not found, the server returns a 404 Error status code.

# Get a single content by Id

In this case the URL must satisfy a strict rule: the service path followed by `/content` (case insensitive) and content Id wrapped in parentheses without white-spaces.

<tab category="basic-concepts" article="entry" example="byId" />

# Get a single content by Path

In this case the URL is the service path followed by the path of the parent and an entity name wrapped by single quotes and parentheses.

<tab category="basic-concepts" article="entry" example="byPath" />

# Addressing a single property of a content

Any property of a content entity can be addressed in the following way:

<tab category="basic-concepts" article="entry" example="property" />

This returns the following response:

```json
{
  "d": {
    "DisplayName": "Cars"
  }
}
```

# Addressing a property value

Raw value of a property can be accessed if the request is extended with the `/$value` parameter.

<tab category="basic-concepts" article="entry" example="propertyValue" />

This returns the following response:

```Cars```

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

# Valid entity urls
There is an important distinction between an entity path (that adresses a single entity and gets a response containing the _fields of that entity_) and a collection path that gets the _child entities_ of that collection. In this section we list the valid entity requests. For collection requests please see the [next page](/api-docs/basic-concepts/02-collection).


The important thing to note is that the content name is enclosed in **parentheses AND single quotes**. This allows you to have content in the repository with a name containing parentheses:

```
https://dev.demo.sensenet.com/OData.svc/Root/Content('MyWorkspace')         // content name: MyWorkspace
https://dev.demo.sensenet.com/OData.svc/Root/Content('Folder(1)')           // content name: Folder(1)
https://dev.demo.sensenet.com/OData.svc/Root/Content('mydocument(2).docx')  // content name: mydocument(2).docx
https://dev.demo.sensenet.com/OData.svc/Root/Content('42')                  // content name: 42
https://dev.demo.sensenet.com/OData.svc/Root/Content('(42)')                // content name: (42)
https://dev.demo.sensenet.com/OData.svc/content(1234)                       // content id: 1234
```

Note the lack of single quotes in the last example? That request refers to the content **by Id**. You can use this format if you do not know anything else about the content, only the id. In this case ``content`` is just a keyword constant, the same way as ``odata.svc`` before it.

# Invalid entity urls
All other formats are invalid. For example when using the ``content`` keyword you can only address the entity by id and quotes are not allowed:

```
https://dev.demo.sensenet.com/OData.svc/content('1234')         // INVALID url
https://dev.demo.sensenet.com/OData.svc/content('MyWorkspace')  // INVALID url
```

The following url is _not an entity request_ but a collection request for a container that happens to contain parentheses in its name:

```
https://dev.demo.sensenet.com/OData.svc/Root/Content/Folder(1)
```
