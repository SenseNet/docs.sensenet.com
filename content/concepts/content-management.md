---
title: "Content Management"
metaTitle: "sensenet - Content Management"
metaDescription: "sensenet Content Management"
---

# What does content management mean?

For content management we mean the processes of storing, editing, organizing and delivering content.

# What is content regarding to sensenet?
In sensenet everything is a content. Documents, tasks, users, projects, even system configuration files – everything – are stored and managed in the [content repository](/concepts/content-repository). It is the foundation that makes content management easy and powerful at the same time. All content items are organized in a [content tree](/concepts/content-tree), so you can always think in subtrees and inheritance when managing and presenting content.

# Basic content management actions in sensenet

All the features that can be called basic content management actions are included in sensenet, so you can create, edit or delete a content, copy or move it to another folder.

To learn more go to [Actions](/concepts/actions)

# Can anybody do anything?

Content management is a collaborative process where every user has its own part (for example a user can have the permission to create a new content, he/she can open and see a content, but doesn’t have the permission to edit or delete it.). Permission management is critical in such system as we have to specify what the user can or cannot do with a certain content.
Since sensenet content repository is a tree based hierarchical content structure it ensures permission inheritance, so it is enough to set a permission rule one time and it comes down in lower levels of the tree. This means, if you set a permission on a document library it will be automatically applied to subfolders and contents ([document level permission](/concepts/document-level-permissions)). You can easily set a permission also for a group and this way control the accessibility of predefined contents ([role based permission](/concepts/role-based-permissions)).
There is a set of basic built-in permissions, such as See, Open, Save, Delete etc., and it is even possible to add custom ones as well.
Besides the built-in permission types (See, Open, etc.) sensenet defines custom permission types (Custom01, Custom02, etc.) that can be used for custom permission settings. A common example would be to allow a user to print a document (or deny it).
It is possible to manage content permission settings through the admin surface, or with User Management and Permission APIs.
