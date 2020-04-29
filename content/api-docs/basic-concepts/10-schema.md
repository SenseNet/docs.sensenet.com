---
title: Schema
metaTitle: sensenet API - Schema
metaDescription: Working with the content types
---

# Schema

sensenet organizes content into content repositories, that allows you to group all the related content for a project together. Since everything is a content in sensenet this repository includes documents, workspaces, users, settings and many more.

The content repository contains many different types of content. Content vary in structure and even in function. Different types of content contain different fields, can be displayed in different ways, and may also implement different business logic. The fields, views and business logic of a content is defined by its type.

Each repository has a content model, a schema that represents the content types you create.

# Get schema

Following example returns the content types and all its properties and fields in json format.

<tab category="basic-concepts" article="schema" example="getSchema" />

# Change the schema

Content types are stored as contents (.xml files) in the content repository as well. If you want to change the schema (modify a content type) you have to update one of these .xml files. As these files are stored as contents with a binary field containing the actual text content of the file, updating these fields' value can be made by getting the text and upload the file again with the updated text as the binary fields value.

Following example returns the binary value of a file content, where 1064 is the `Id` of the Workspace type content:

<tab category="basic-concepts" article="schema" example="getBinary" />

And if the modified xml is ready you can save it back and update the schema. The uploading a content type is the same as uploading any other common files. Check the [Upload API docs](/api-docs/content-management/04-upload)
