---
title: "Content Tree"
metaTitle: "sensenet - Content Tree"
metaDescription: "sensenet Content Tree"
---

sensenet content repository is basically a tree structure of the various stored content (e.g. folders, documents, user, tasks, etc.). A specific content is identified by a unique number (id) and also by its path. The root of the tree is at `/Root` path, all other content is placed somewhere under this root content - for example the users are placed at `/Root/IMS`.

# Structured storage of content

Tree structure lets you organize, group your content easily by creating separate subtrees. It's not only important because of the possibility to configure content accessibility for different types of users on different parts of the tree, but also because of the inheritence of several things like content types' underlying business logic, metadata field configurations and settings.

This kind of data storage makes it possible to store content of multiple different projects (public website, intranet, document management app, etc.) in one repository. By creating multiple subtrees with folders or workspaces you can build up custom content structures and every subtree can have its own permission settings, roles and configurations, considering who can access it and what it will be used for.

# Searching in subtrees

sensenet's search engine provides you an easy and perfomant way to query content in the repository. You can make it even more efficient building separate subtrees for separate use cases. This way the system will only search those part of the tree that are related making the search itself much faster and effective.

# Content access and url resolution

As it is mentioned above every content in the content repository is not only identified by its unique id but also its path. If you move a content to another folder thus change its path, so the tree structure of the repository makes it possible to use the path as a link to the content.

# Permission inheritance

As in sensenet content is stored in a huge tree with a single root, when you set a permission on a container item on a higher level (e.g. a document library or a workspace) it will be inherited by its children. This way you do not have to set permissions on every subfolder or document, because all content inherits permissions from their parent.

Inherited permissions cannot be changed without breaking the inheritance, but you can set additional permissions for the same identity (e.g. grant `Open` permission to someone who already has `See` permissions inherited).

Sometimes you may need to set local only permissions that are not propagated to children and it is also possible to do with sensenet, check the other docs about the permission system.

# Settings inheritance

Settings are created for administrators or editors to let them customize the behavior of a certain feature. In sensenet these settings are stored as content in the content repository so you can take all the advantages of the tree sturcture in case of settings as well.

Settings files can be global or local. Local settings files override global ones and they are applied only on the related part of the content repository. Every key in a settings file is overridable in another file with the same name under an appropriate position in the subtree. For example you can use a global document preview watermark setting for the whole repository, one for a project workspace and another one for a specific document library for contracts.

# Content type inheritence

Content types are defined in a type hierarchy: a content type may be inherited from another type automatically inheriting its fields and the underlying business logic (handler). A content type may only inherit fields from a single type because of the tree structure, multiple inheritance is not allowed. Inherited field configuration can be overridden in derived types (e.g. in a custom `CompanyUser` type inherited from the built-in User type will have all the fields that are defined on the `User` and can have also additional ones related to its specialities).
