---
title: "Custom Roles and Permissions"
metaTitle: "sensenet - Custom Roles and Permissions"
metaDescription: "sensenet Custom Roles and Permissions"
---

# Custom Roles and Permissions

sensenet comes with a built-in role and permission system. These pre-defined role and permission type sets are adequate in most of the cases, but there might be some situation when it is desired to define custom ones.

# Creating a new role


sensenet offers special and built-in groups and users by default. Built-in groups in sensenet are regular groups, meaning their membership can be freely modified. They are used in the default Content Repository structure extensively, but no hard-coded logic is built on them. This means you can freely change or replace these groups with your own custom groups in your permission settings.

There can be some cases when you need to create a new role, which is actually a new group. You just need to create the group and set the proper permission rules of this group, then add the users to it. This way, instead of setting permissions to individual users one by one, they will earn the permissions of the group automatically. For example, if you would like to create the role "Approval", you create the group "Approval". Then in the subtree you allow the permission "Approve" and put the required users into the group.


# Modifying an existing role

It is possible to change the permission settings for groups, these changes follows the same logic of the creation of a new role: this means it is enough to set the new permissions (so make the changes) directly on the subtree for the group, the group member users will earn the permission setting automatically. A simple example is that for a certain group you want to allow/ deny the permission to see a content, for example a folder.

# Permissions

Besides the built-in permission types (See, Open, etc.) sensenet defines 14 custom permission types (named Custom01, Custom02, etc.) that can be used for custom permission settings. A common example would be to allow a user to print a document (or deny it): for this, developers could assign the permission type Custom01 and use it consistently in the system to check permissions and allow or restrict printing.
When you set permissions for an identity, you can either allow that user or group to access a certain feature or deny it. Attention, deny is always stronger than allow permission.
