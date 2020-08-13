---
title: "Content management"
metaTitle: "sensenet admin-ui - Content management"
metaDescription: "sensenet admin-ui - Content management"
---


# Basic content actions

Most of the operations with content in sensenet is governed via _Actions_. An _Action_ is basically a command instructing the system to use a specific component to get or update the properties of the addressed content item.

The basic content actions are:
- **copy**
- **move**
- **delete**
- **download**
- **browse**

You can reach them easily on the admin ui.

![actions](../../concepts/img/actions.gif)

Actions are always connected to a content. As such, you can look at them from content side as well. That means you can always check available actions for a content without doing any special moves or writing custom code.
List of the available actions are stored on the content's metadata.
To see which actions are available for a specific content do a right click or open the action menu (three dots).

You are able to complete bulk actions, such as _Delete_, _Move_, and _Copy_ by selecting the desired files, or with _Select All_ function, all of them.

![select_all](../img/select_all.png)

As _Actions_ could be represented as contents too, they could covered by permission system as well. You have the possibility to define which users can do a task and which ones not (e.g. you can allow the _Editors_ group to use an action but not allow it for _Developers_).
Basic content actions are available on files, folders, just like on any other content, like users, workspaces etc.
