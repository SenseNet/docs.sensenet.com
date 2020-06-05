---
title|Permissions
metaTitle|"sensenet API - Permissions"
metaDescription|"Permissions"
---

sensenet has a flexible permission system for controlling the accessibility of content on different levels. You are able to set permissions (allow or deny) for individual users or groups, on individual documents or whole libraries and workspaces. Managing and visualizing the permission settings is of course available and can be done through OData REST API.

# List of built-in permissions

|  |  |
|--|--|
|See|controls whether the user is allowed to see the content (ie. visible in a list, but field data cannot be accessed)|
|Restricted preview|controls whether the user is allowed to see a preview of a document. All field data can be accessed, except binary fields.|
|Preview without watermark|controls whether the user is allowed to see a preview of a document without a watermark. All field data can be accessed, except binary fields.|
|Preview without redaction|controls whether the user is allowed to see a preview of a Content (e.g. a document) without redaction. All field data can be accessed, except binary fields.|
|Open|controls whether the user is allowed to open the content to see and access its field data|
|Open minor|controls whether the user is allowed to open minor versions of the content and see corresponding field data|
|Save|controls saving of the content|
|Publish|controls publishing of the content|
|Force undo checkout|controls whether the user is allowed to undo pending changes when the content is checked out by someone else|
|Add new|controls creation of new content under the given container|
|Approve|controls approval of the content|
|Delete|controls deletion of the content|
|Recall old version|controls whether the user is permitted to restore an old version of the content|
|See permissions|controls whether the user is allowed to see permission settings for the content|
|Set permissions|controls whether the user is allowed to change permission settings for the content|
|Run application|controls whether the user is allowed to use the content by an application.|

# What is a permission entry?

# Get permission entries of a content

# Get a permissions entry of a specific user or group

> info|local group-okra is működik ofc

# Check user access

# How can I check why a user cannot access a content?

# How can I check why a user cannot save a content?

# Check if I can see the permission settings
