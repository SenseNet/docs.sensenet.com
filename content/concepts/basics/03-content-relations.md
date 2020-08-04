---
title: "Content Relations"
metaTitle: "sensenet - Content Relations"
metaDescription: "sensenet Content Relations"
---

In sensenet, the relation between contents is as important as storing them. Because of the hierarchical tree structure of the content repository, it is important to mention parent and child relations between contents, which allows users to take advantage of inheritance. Beside that, sensenet also makes it possible to create other types of relations between contents. Such relation could be in a form of a reference field (link to another content), binary field (for storing binary data on a content), or attachment (by combining reference and binary fields).

# Content repository tree

A sensenet content repository is basically a tree structure of the various stored content (e.g. folders, documents, user, tasks, etc.).
This structure allows inheritance of several things like the underlying business logic of content types, metadata field configurations, and settings. In addition to that, you can organize and group your content easily by creating separate subtrees. You can also configure content accessibility for different types of users on different parts of the tree.

# Parent-child relation
Content can inherit multiple data from its ancestors, from fields to permissions. The possibilities are almost infinite.

## Permission inheritance
Set a permission on a container item on a higher level (e.g. a document library or a workspace), and it will be inherited by its children. This way you do not have to set permissions on every subfolder or document, because all content inherits permissions from their parent.

## Settings inheritance
In sensenet, settings are stored as content in the content repository, so you can advantage of the tree structure in the case of settings as well. Let's have watermark settings as an example. It is possible to set a watermark globally for each and every preview image. In addition to that, you can define different watermarks for different workspaces (which will then overwrite global settings), or even set watermark to a specific doclib.

> [Learn more about settings](/concepts/basics/07-settings)

## Content type inheritance
Content types are defined in a type hierarchy. A content type may be inherited from another type, automatically inheriting its fields and the underlying business logic (handler). 

> [Learn more about content tree and inheritance](/concepts/basics/02-content-tree)

# Reference field (links)

The reference field is used for defining references to other content(s). When a content holds references pointing to other content (for example a group referencing users), it is done with a reference field.

Reference field holds many options to customize its behaviour. You can define the **number of references** the field can hold, set **default reference** for a certain content type (all newly created content will contain the predefined references), restrict referable content by **type** or **location**, or define a set of referable content with a query.

Reference field works flawlessly with other parts of the system. For example, when a reference is moved to another place or it has been renamed, it does not affect the content it is referenced by (the moved/renamed reference is still visible in the reference field).
Concerning permission handling, if the current user does not have see permissions to one of the references, that reference is not visible for the user at all.
When a content with a reference field is copied, the newly created content will hold the same references as the source content.
> Copying source content references along with the source content does not affect this behavior. The newly created content will hold references to the originally referenced content and not the newly created copies.

# Binaries

Binary field is used for storing binary data. This is the most important field defined on the file content type. After uploading a file, the binary content of your file will be stored in a binary field.

This field can store any kind of binary without length restrictions. This is very useful when you want to store uploaded files in your solution.

> For example, when uploading a ``.docx`` file to the content repository, it basically creates a new content where the binary is stored in the corresponding field of the new content item. This allows storing other metadata on the content besides the binary itself.

# Attachments
Following the reference and binary field logic, it is easy to add attachments to a content by combining these two content relations.
The advantage of this is that no content is duplicated, and contents can be referenced from basically any part of the tree.
Multiple reference option allows ``1:n`` connection via reference field, as well as ``n:1`` by using query in the reference field.

# Allowed child types
In the sensenet content repository, it is possible to define restrictions on what content types the different containers can hold. You can configure ``AllowedChildTypes`` in the content type definition for the different types. For example a calendar can only contain events, a document library can only contain folders and files, etc. These settings can be overridden on the specific content: for example, you can modify any of your document libraries to contain images too.
There are also some special types that behave differently: for example, a folder can never define child types, as it will always inherit its parent settings. A ``SystemFolder`` will allow every type by default and can be created anywhere in the repository.

> [Learn more about allowed child types](/concepts/content-management/06-allowed-childtypes)
