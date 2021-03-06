---
title: "Roles and permissions"
metaTitle: "sensenet Admin-ui - Roles and permissions"
metaDescription: "sensenet admin-ui - Roles and permissions"
---

User management is a core function of the business, that includes user creation, rights management and assigning roles to the users. Effective user management contains adjusting the access rights of the users who change role, get promoted or leave the company. Usually it's important to make these changes in short time and this way we can increase both effectiveness and integrity.

# Built-in and custom permissions
There is a set of basic built-in permissions, such as See, Open, Save, Delete etc., and it is even possible to add custom ones as well.

**See**: you only have the information that the content exists (content metadata cannot be accessed)
**Open**: you have access to content metadata
**Save**: you can make changes in the content metadata

Other permissions for removing or approving a content or managing lists and workspaces.
As mentioned above, the built-in permission set can be extended with custom ones as well.

# Built-in roles for SNaaS users
**Administrators**: are considered to be the most powerful users in the system. This may be true for some features but not necessarily for all content. In the default structure, administrators have access to everything, but when you build your project and add your custom content, it is perfectly fine if you hide something from the Administrators group. For example you may remove their permissions from confidential documents completely.

By default only the Admin user is a member of this group, but you can add more members as you like. Please use this group for any administrative permissions instead of adding admin rights to single users.

**Editors**: We do not have any predefined permissions for this group, we consider them as a middle layer between administrators and regular users. For example you can define permissions for the global Editors group for skins and renderers or content types.

**Developers**: We created this group to help developers work in the development phase of a new project. By the default installation the group is the member of the Developers group.

# Permission inheritance
One of the advantages of the tree based hierarchical content structure in sensenet, is that it ensures permission inheritance, so it is enough to set a permission rule one time and it comes down in lower levels of the tree. This means, if you set a permission on a document library it will be automatically applied to sub-folders and contents. Inherited permissions cannot be changed without breaking the inheritance. You may decide to change some permissions inherited from above - e.g. an inherited Open permission for a user that you do not want to allow in a subtree. In that case you can break permission inheritance on a content. That means all the inherited permission entries will be copied to the current content then you will be able to change them (usually remove one or more). The new permission set (even if it contains less entries than the inherited) will be the one that is used in that subtree. If possible, break permissions in exceptional cases only, because it makes permission administration more complicated.

You can read more about Permissions in sensenet [here](/concepts/user-and-permission-management).
