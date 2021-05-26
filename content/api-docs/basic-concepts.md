---
title: "Basic Concepts"
metaTitle: "sensenet API - Basic concepts"
metaDescription: "Basic concepts behind sensenet API"
---

# Introduction to sensenet REST API

sensenet offers you a rich API allowing you to manage, integrate and deliver content on all types of clients, devices and platforms. This section explains the API structure and main concepts in more depth.

sensenet content repository is an [OData](https://www.odata.org/) producer which means your application can consume our [OData](https://www.odata.org/) service to create web and mobile apps or any other type of content based applications. It supports CRUD operations, properties, binary streams, paging options, custom queries and many more.

The requested resource can be any content in the repository (since everything is a content in sensenet, it could be really anything) that is permitted for the current user.

# API endpoint

An OData HTTP request sent to the sensenet Content Repository contains the following parts:

- protocol (`http` or `https`)
- host (a site URL)
- the `OData.svc` service name
- the `Path` (or `Id`) of the requested resource
- optional parameters

```json
https:/example.com/OData.svc/[CONTENTPATH]
```

# Query options

Query options are query string parameters a client may specify to control the amount and order of the data that a service returns for the resource identified by the URI. In sensenet there're two types of query options available [OData System Query Options](https://www.odata.org/documentation/odata-version-3-0/url-conventions/) and custom sensenet query options. The OData standard query options' names are prefixed with a "$" character, sensenet query options should be used without a prefix.

| option |     |
| ------ | --- |
| [$select](/api-docs/basic-concepts/03-select-expand#select) | specifies that a response from the service should return a subset of properties |
| [$expand](/api-docs/basic-concepts/03-select-expand#expand)| allows you to identify related entries with a single URI such that a graph of entries could be retrieved with a single HTTP request (e.g. creator user or any other related content) |
| [$orderby](/api-docs/basic-concepts/04-ordering-paging#ordering)  | allows you to sort results by one or more properties, forward or reverse direction |
| [$top](/api-docs/basic-concepts/04-ordering-paging#top) | identifies a subset selecting only the first N items of the set |
| [$skip](/api-docs/basic-concepts/04-ordering-paging#skip)  | identifies a subset that is defined by seeking N entries into the collection and selecting only the remaining ones |
| [$filter](/api-docs/basic-concepts/05-search-filter#filtering)  | identifies a subset determined by selecting only the entries that satisfy the predicate expression specified by the query option |
| $format | specifies that a response to the request MUST use the media type specified by the query option (Atom and xml formats are not implemented yet in sensenet)  |
| [$inlinecount](/api-docs/basic-concepts/02-collection#inlinecountqueryoption) | controls the `__count` property that can be found in every collection response |
| [query](/api-docs/basic-concepts/05-search-filter#queryoption)  | filter the result collection using sensenet Content Query |
| [metadata](/api-docs/basic-concepts/06-metadata) | controls the metadata content in output entities |

# Accessibility

# HTTP methods

The following HTTP methods can be used in requests to specify the expected operation:

| method ||
| --- | --- |
| GET | [getting one or more entities](/api-docs/basic-concepts/01-entry). The URL contains all request information. |
| PUT/PATCH | [modifying an entity](/api-docs/content-management/02-update). The URL defines the entity and the request body contains a JSON object. This object describes the properties and new values of the requested entity. |
| POST | [creating an entity](/api-docs/content-management/01-create). The URL defines the parent entity and the request body contains a JSON object. The URL determines the container of the new entity. The JSON object describes the properties and initial values of the new entity. |
| DELETE | [deleting an entity](/api-docs/content-management/03-delete). The entity (defined in the URL) and its children will be deleted. |

# Response

sensenet currently supports only the [OData Verbose JSON response format](https://www.odata.org/documentation/odata-version-3-0/json-verbose-format/), so the API response for a sensenet collection will look like the following:

```json
{
  "d": {
    "__count": 10,
    "results": [
      {
        "__metadata": {
          "uri": "/odata.svc/Root/Content/IT/ImageLibrary('bagas-haryo-1415756-unsplash.jpg')",
          "type": "Image",
          ...
        },
        "DisplayName": "bagas-haryo-1415756-unsplash.jpg",
        "Path": "/Root/Content/IT/ImageLibrary/bagas-haryo-1415756-unsplash.jpg",
        "Index": 5
      },
      {
        "__metadata": {
          "uri": "/odata.svc/Root/Content/IT/ImageLibrary('Sample-folder')",
          "type": "Folder"
        },
        "DisplayName": "Sample folder",
        "Path": "/Root/Content/IT/ImageLibrary/Sample-folder",
        "Index": 2
      },
    ...
```
