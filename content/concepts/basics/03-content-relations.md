---
title: "Content Relations"
metaTitle: "sensenet - Content Relations"
metaDescription: "sensenet Content Relations"
---

In sensenet the relation between contents is as much important as storing them. Because of the hierarchical tree structure of the content repository, it's important to mention parent and child relations between contents allowing users to take advantage of inheritance. Beside that, sensenet also gives the possibility to create other type of relations between contents. Such relation could be in a form of reference field (link to another content), binary field (for storing binary data on a content) or attachment (by combining reference and binary field).

# Content repository tree

sensenet content repository is basically a tree structure of the various stored content (e.g. folders, documents, user, tasks, etc.).
This structure lets you organize, group your content easily by creating separate subtrees. It's not only important because of the possibility to configure content accessibility for different types of users on different parts of the tree, but also because of the inheritance of several things like content types' underlying business logic, metadata field configurations and settings.

# Parent-child relation
Content can inherit multiple things from its ancestors, from fields to permission the possibilities are basically infinite.

## Permission inheritance
Set a permission on a container item on a higher level (e.g. a document library or a workspace) it will be inherited by its children. This way you do not have to set permissions on every subfolder or document, because all content inherits permissions from their parent.

## Settings inheritance
In sensenet, settings are stored as content in the content repository so you can take all the advantages of the tree structure in case of settings as well.

## Content type inheritance
Content types are defined in a type hierarchy. A content type may be inherited from another type automatically inheriting its fields and the underlying business logic (handler). 

> ([learn more about content tree and inheritance](/concepts/basics/02-content-tree))

# Reference field (links)

The reference field is used for defining references to other content(s). When a content holds references pointing to other content (for example a group referencing users) it is done with a reference field.

The following apply to the behavior of the field:

- **number of references:** a reference field can be configured to hold either one or more references
- **default reference:** one or more default references can be set via field configuration
- **types of referable content:** types of referable content can be restricted
- **location of referable content:** location of referable content can be restricted
- **set of referable content:** set of referable content can be defined with an optional query
- **moving/renaming references:** when a reference is moved to another place or it has been renamed, it does not affect the content it is referenced by - the moved/renamed reference is still visible in the feference field
- **permission handling:** if the current user does not have see permissions to one of the references, that reference is not visible for the user
- **copying content with references:** when a content with a reference field is copied, the newly created content will hold the same references as the source content. 

(Maybe it's not that important here, could be deleted:
Copying source content references along with the source content does not affect this behavior, the newly created content will hold references to the originally referenced content and not the newly created copies.)

## Configuration
The following properties can be set in the field's ``FieldSetting`` configuration:

- **AllowMultiple:** a boolean property defining whether multiple references are allowed or only a single content can be referenced. By default only a single reference is allowed.
- **AllowedTypes:** allowed content types can be defined by explicitely listing type names in type elements. By default all content types can be referenced.
- **SelectionRoot:** allowed location of referable content can be defined by listing paths in path elements. By default content can be referenced from under ``/Root``.
- **DefaultValue:** a default single content reference can be defined with its path. Default multiple references can be defined with a comma separated list. By default the field contains no references.

# Binaries

Binary field is used for storing binary data. This is the most important field defined on the file content type. After uploading a file, the binary content of your file will be stored in a binary field.

This field can store any kind of binary without length restrictions. This is very useful when you want to store uploaded files in your solution.

> when uploading a ``.docx`` file (for example) to the content repository, it basically creates a new content where the binary is stored in the corresponding field of the new content item.

# Attachments
Following the reference and binary field logic, it's easy to create an attachment for a content by combining these two content relations.

(should be extended)

# Allowed child types
In sensenet content repository it is possible to define restrictions on what content types the different containers can contain. You can configure ``AllowedChildTypes`` in the content type definition of the different types. For example a calendar can only contain events, a document library can only contain folders and files, etc. These settings can be overridden on the specific content, for example you can modify any of your document libraries to contain images too.
There are also some special types that behave differently: a folder for example can never define child types, it will always inherit its parent settings. A ``SystemFolder`` will allow every type by default and can be created anywhere in the repository.

> ([learn more about allowed child types](/concepts/content-management/06-allowed-childtypes))
