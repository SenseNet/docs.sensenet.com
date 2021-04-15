---
title: "Basics"
metaTitle: "sensenet Concepts - Basics"
metaDescription: "sensenet basics"
---

# Everything is a content

Content is the basic block for storing information in sensenet. A content can be any kind of data, user, document, workspace, memo, task, and more. Using content items everywhere unlocks a great deal of exceptional features, making your experience as a user more seamless, and your job as a developer a lot easier.

# Where can I find content?

The foundation of sensenet is the content repository, where documents, tasks, users, projects - everything is content. It is the fundamental building block of the system that makes content management easy and powerful at the same time. The content repository forms a [tree structure](/concepts/content-tree) of the various stored items.

A specific content is identified by a unique ID as well as its path in the repository - the relative path to the root content. The root of the content repository is a content at the /Root path, and all other items are placed somewhere under this root content.

# How should I imagine a content?

Every content is built up of fields (a user content for example has a *name* field and *password* field, among others). Different types of content can be created by defining a different set of fields. The type of the content is called the ```content type``` and defines a set of fields the content possesses as well as its behavior. Learn more about [content types](/concepts/content-types).

# How can I store/browse my data?

The sensenet admin UI provides a handful of tools to manage content. You can create new content of the defined content types and fill their fields with data. You can also define new content types of any kind. You can copy, move, delete, and rename content as well as upload/download files into/from the content repository. And that is just the basics. The options for managing your content are nearly endless.

# Accessing content through the REST API

With the sensenet services layer, you do not need a UI to manage content at all, because you can access your content in the repository through our REST API. The requested resource can be any content or children of a content in the repository that is permitted for the current user.
