---
title: "REST API"
metaTitle: "sensenet - REST API"
metaDescription: "sensenet REST API"
---

sensenet offers a rich API allowing you to manage, integrate and deliver content on all types of clients, devices and platforms. This section explains the API structure and main concepts in more depth.

sensenet content repository is an [OData](https://www.odata.org/) producer which means your application can consume our [OData](https://www.odata.org/) service to create web and mobile apps or any other type of content based application. It supports CRUD operations, properties, binary streams, paging options, custom queries and many more.

The requested resource can be any content in the repository (since everything is a content in sensenet, it could be really anything) that is permitted for the current user.

[dig deeper into sensenet REST API](/api-docs/basic-concepts)

# Content delivery

The requested resource can be any content in the repository that is permitted for the current user. Since everything is a content in sensenet this means that every item (user, folder, document, etc) can be accessed through the same API.

Resources can be accessed as individual entities or as collections (containers) of content. Based on the way of accessing the result will contain a content's or its children's metadata. The response is always in json format which you can easily process and build into your own application.

[more about content delivery](/api-docs/basic-concepts/01-entry)

# Content management and beyond

sensenet's REST API isn't only a content delivery API, it supports also CRUD operations and many other things for managing content like upload, versioning, approval or setting permissions.

[explore all the possibilities](/api-docs/content-management)

# Accessibility

All content in the repository is secured by the permission system, which means users can only access or manage content that is allowed for them. This also makes the API super secure and flexible in the same time. You define the access points and levels and these settings also apply to every request and response sent and received through the API.

# Extend the API

sensenet's REST API is also expandable in many ways. Possiblity of filtering, querying or ordering the results provided by sensenet services give you all the tools you need to add custom business logic to your API calls. Additionally it is possible to add custom APIs (custom [Actions](/concepts/basics/08-actions)) if you have the on premise version.
