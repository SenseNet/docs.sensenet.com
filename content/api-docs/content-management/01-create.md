---
title: Create
metaTitle: "sensenet API - Create a content"
metaDescription: "How to create a new content"
---

Creating a content is an http `POST` request under the hood. You can call it by defining the parent content (this will be the path where the actual request will be sent), the required type and a content object with the fields and values that you want to save when the new content is created (these things have to be added to the request body). These `POST` requests will return the newly created content object in JSON format.

<note severity="info">
Note that every create operation requires the caller to have the ``AddNew`` permission in the target container.
</note>

Without defining the content type of the new entity, the first allowed content type of the parent entity will be used. The default content type is overridable in the posted JSON object with the `__ContentType` property, as you can see in the example below.

In the following example you can see how you can create a new Folder and set its name:

<tab category="content-management" article="create" example="create" />

# Create a workspace

With the following example you will create a new workspace. The request will return the workspace content object:

<tab category="content-management" article="create" example="createWs" />

# Create a document library

The following example request creates a new document library:

<tab category="content-management" article="create" example="createDocLib" />

# Create a user

Creating a user works the same way as creating other type of content in the repository. You can see in the following example that it differs only in the `__ContentType` property:

<tab category="content-management" article="create" example="createUser" />

# Creating a content by template

sensenet provides you the possibility to create a content by a [content template](/concepts/content-template). In the following case the request will create a **workspace** with an **event list** under it with the name Calendar and fill its `Index` field with the value 2. Other field values will be filled by the default values defined on `CalendarTemplate` template. See the `__ContentTemplate` parameter:

<tab category="content-management" article="create" example="createByTemplate" />
