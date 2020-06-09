---
title: Users and Groups
metaTitle: "sensenet API - Users and Groups"
metaDescription: "Working with users and groups"
---

Since everything is a content is sensenet, managing users and groups through the API is the same as managing documents or articles. You create, read, update or delete them the same way, but there are also some special actions and API calls that can make working with these two type of contents easier. You can learn about these in the following sections.

# Creating users

 To add a new user to your repository you just have to add a new content with the type `User` setting all of the needed fields (don't forget to set the field `Enabled` to `true` if you want to add a user who should login to the repository):

<tab category="users-and-groups" article="users-and-groups" example="createUser" />

# Disable a user

Disabling user account could be really useful if you want to lock out a user from the repository but you have to keep the user itself and all the data that are connected to him/her. In other words after disabling a user everything (contents, owners, modifiers, etc.) remain the same as before except that the affected user cannot login. `Enable` is a simple boolean field on the User content type and its value can be changed just like other metadata of a content. Using the following code you can lock out `editormanatee` user from a demo repository:

<tab category="users-and-groups" article="users-and-groups" example="disableUser" />

# Creating roles (groups)

Role functionality in sensenet can be achieved with using groups. Group is a special content type that holds members (that can be users or even another groups) as references in one of its fields. Creating a new role means you have to create a new group content and add the required users and groups as members, so than it will be ready to have custom permissions allowed or denied across the system. With the following code snippet you can create a new role for publishers adding an existing user and a group as its two members:

<tab category="users-and-groups" article="users-and-groups" example="createRole" />


