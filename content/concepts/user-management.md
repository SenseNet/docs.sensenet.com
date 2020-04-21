---
title: "User Management"
metaTitle: "sensenet - User Management"
metaDescription: "sensenet User Management"
---

User management is a core function of the business, that includes user creation, rights management and assigning roles to the users. Effective user management contains adjusting the access rights of the users who change role, get promoted or leave the company. Usually it's important to make these changes in short time and this way we can increase both effectiveness and integrity.

# Users and groups as content

sensenet is built around content, as well as users and groups. Every content is built up by fields, so for example a user as content has numerous special fields as well for storing data like their username and password (among others).

# Built-in groups and users

sensenet offers special and built-in groups and users by default. All users and almost all groups are stored in the /Root/IMS folder. It is possible to create groups outside the IMS folder. These are local groups created for using individual workspaces.

Built-in groups in sensenet are regular groups, meaning their membership can be freely modified. They are used in the default Content Repository structure extensively, but no hard-coded logic is built on them (except for the Administrators group, please do not delete that one). This means you can freely change or replace these groups with your own custom groups in your permission settings. The best practice however is that you build on them, using the suggested purpose in the following sections.

- public domain (/Root/IMS/Public) for the users

- builtin domain (hidden) for technical users and groups that cannot be modified but its capabilities could be used in development

   - Visitor: Everybody is a visitor until logging in. Therefore you cannot log in as a Visitor user because it represents users who are not logged in. It has a couple of permission settings in the default structure for content that should be accessible for everybody. in case you are building a public website with sensenet with a subtree that contains content that should be available to browse and open publicly, you have work with Visitor and allow this technical user to see and open contents where it is necessary.
   - Everyone: This is the largest group in the system: every single user is considered as a member of the Everyone group, except the Visitor user. This behavior cannot be changed. Please set permissions for this group carefully, as every logged in user will have access to those content. Note that you cannot set deny permissions for the Everyone group, because it would make that content inaccessible for - well, for everyone, including you. Everyone group may come in handy when you want to allow something to be used and seen by every logged-in user the same way.
   - Owners: This group is really a special group: when you set permissions for this group, it refers to the user who is the owner of a particular content. But the owner is different for every single content, and this is what this special group 'virtualizes'. The Everyone group above is easier to imagine, because it can be described as a group with many members. The Owners group on the other hand stands for the single user who is the owner of a content when evaluating permissions. This allows you to define and manage permissions in one place (on a container) that applies to a user that is different for every content inside that container.

A good example of this could be the user profiles feature: all profile has its own permission settings for the Owners group, meaning every user will have permissions for their own profile section (because everybody is the owner of their own profile), but nobody has access to another users profile.
Or you may state that identified users can upload documents into a document library but only Owners can delete contents. This means users can upload documents into the library and even see each others' documents, but everybody will be able to delete only their own documents.
   - IdentifiedUsers: Identified users are what the name implies: users who we know. These can be intranet users synchronized from the Active Directory or users created for your clients or partners. The membership of this group depends totally on you, the system does not add anybody to this group automatically.
   - RegisteredUsers: The Registered users group is a regular group, you may modify its members freely; the only specialty of it is that the sample public registration workflow adds users to it. They should have slightly less permissions than identified users (see above) because the registration can be very open in a public portal. This is why there are not many permission settings for this group in the default structure.
   - Somebody: This is a low-level placeholder user for cases when we cannot find a creator/modifier user that previously existed or the currently logged in user does not have permissions to see the creator or modifier of a content. Please do not delete this user and do not try to use it as a regular user.

# Built-in public groups/roles for basic tasks

Administrators

Administrators considered to be the most powerful users in the system. This may be true for some features but not necessarily for all content. In the default structure, administrators have access to everything, but when you build your project and add your custom content, it is perfectly fine if you hide something from the Administrators group. For example you may remove their permissions from confidential documents completely.

By default only the Admin user is a member of this group, but you can add more members as you like. Please use this group for administrative permissions instead of single users.

Editors

We do not have any predefined permissions for this group by default, we consider them as a middle layer between administrators and regular users. For example you can define permissions for the global Editors group for skins and renderers or content types.


- Developers: We created this group to help developers work in the development phase of a new project. By the default the group is the member of the Administrators group.

# Permission
sensenet offers you a sophisticated permission system, giving you the possibility to apply permission rules according to the logic you prefer.
Using role-based permissions, you can assign users to roles taking advantage of predefined permission settings. Role based access control provides management of users and the actions they can execute on contents (for example built-in permissions such as See, Open, Save, Delete etc. and it is also possible to add custom ones as well.
Define roles based on the business logic right at the beginning of your project so it will be much easier to handle permission related tasks (like add/remove a user) in the long run.
To learn more go to [role based permission](/concepts/role-based-permissions/)

# Workspace local groups
In sensenet the default location of users and groups is the IMS folder. However, we can create groups under workspaces too. The main purpose of Workspace local groups is to help permission management inside workspaces. They are located under the Groups system folder in workspaces and workspace permissions can be defined for these groups. If the local group structure is properly configured, the only thing workspace administrators should do when a new user is assigned to a workspace is to add them to the proper local group(s) instead of assigning permissions to individual users. In sensenet there are three predefined local groups (Owners, Members, Visitors) that cover the most important use cases but there are no limitations to add or remove groups or modify the default behavior. Groups are contents too (like almost everything in sensenet), so you can add additional groups to workspaces as easily as you add folders. Populating a group with users is an easy task as well using our group management GUI with instant search capability.

# How to create a new role

There can be some cases when you need to create a new role, which is actually a new group. You just need to create the group and (as mentioned above), set the proper permission rules of the group, then add the users to the group. This way instead of setting permissions to individual users one by one, they will earn the permissions of the group automaticly. For example, if you would like to create the role "Approval", you create the group "Approval". Then in the subtree you allow the right "approval" and put the users into the group.
