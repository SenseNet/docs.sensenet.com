---
title: "REST API"
metaTitle: "sensenet - REST API"
metaDescription: "sensenet REST API"
---

**sensenet** provides a rich API allowing you to manage, integrate, and deliver content on all types of clients, devices, and platforms. This section explains the API structure and other main concepts in greater detail.

A sensenet content repository is an [OData](https://www.odata.org/) producer, which means your application can consume our [OData](https://www.odata.org/) service to create web and mobile apps or any other type of content-based applications. It supports CRUD operations, properties, binary streams, paging options, custom queries, and many more.


[Learn more about the sensenet REST API](/api-docs/basic-concepts)

# Content delivery

The requested resource can be any content in the repository that is permitted for the current user. Since everything is content in sensenet, every item (user, folder, document, etc.) can be accessed through the same API.

Resources can be accessed as individual entities or as collections (containers) of content. Based on the way of access, the result will contain the metadata of a content or its children's. The response is always in JSON format, which you can easily process and build into your own application.

[More about content delivery](/api-docs/basic-concepts/01-entry)

# Content management and beyond

**sensenet** REST API is not only a content delivery API, as it also supports CRUD and other operations for managing content: uploading, versioning, approval or setting permissions, etc.

[Explore all the possibilities](/api-docs/content-management)

# Accessibility

All content in the repository is secured by the permission system, which means users can only access or manage content that is allowed for them. This also makes the API highly secure and flexible at the same time. You define the access points and levels, and these settings also apply to every request and response sent and received through the API.

# Extend the API

Sensenet's REST API is also expandable in many ways. It is possible to filter, query, or order the results provided by sensenet. Its services provide you all the tools you need to add custom business logic to your API calls. Additionally, you can also add custom APIs (custom [Actions](/concepts/basics/08-actions)) if you have the on-premise version.
