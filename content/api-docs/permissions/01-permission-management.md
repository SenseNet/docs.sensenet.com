---
title: Permission Management
metaTitle: "sensenet API - Permission Management"
metaDescription: "Permission management"
---

Of course you can not only get the permission entries and the related settings but you can add or update existing ones as well.

# Allow a user to save a content

With the following example you allow demo editor user (*editormanatee*) to update (save) content in the *IT* workspace:

<tab category="permissions" article="permission-management" example="allowSave" />

# Allow a group (role) to approve content in a document library

The above mentioned methodology works for groups as well. Next example shows you how to allow members of the *Editor* group (role) to approve content in the *IT* workspace's document library:

<tab category="permissions" article="permission-management" example="allowApproveForAGroup" />

# Prohibit a user from deleting content from a folder

You are not only able to allow a permission but also you can deny it, as in the following example to deny *Delete*:

<tab category="permissions" article="permission-management" example="denyDelete" />
&nbsp;
<note title="Deny is always stronger than allow" severity="error">If you set a deny permission for a certain user, it does not matter if she has allow permission inherited from above or through a group membership - she will not be able to access that feature. You can only make deny permission disappear on lower levels only if you break permission inheritance on a subfolder and remove the deny permission there.</note>

# Break inheritance

You may decide to change some permissions inherited from above - e.g. you inherited an *Open* permission for a user that you do not want to allow in a subtree. In that case you can break permission inheritance on a content. That means all the inherited permission entries will be copied to the current content and you will be able to change them. The new permission set (even if it contains less entries than the inherited) will be the one that is used in that subtree:

<tab category="permissions" article="permission-management" example="breakInheritance" />

# Local only

If you allow (or deny) a permission for a user the setting will be inherited to lower levels for the whole subtree thats root is the content on which you've set permissions. Sometimes you need to prevent setting to inherit, to make your settings valid local only. For such cases sensenet permission system provides you the local only flag. Following example shows you how to let editor users (members of the *Editors* group) to add new content to the *IT* workspace's link list with the restriction that they cannot see other content created by others:

<tab category="permissions" article="permission-management" example="localOnly" />

# Using custom permissions

There might be some cases when it is desired to define custom permissions on content (for example if you want to control whether a specific user is allowed to print a certain document or not). This setting would be much more than a simple global role (group), since the setting could vary for different content and for different users at the same time. Besides the above mentioned built-in permission types sensenet make 14 custom permission type (Custom01, Custom02, etc.) available, that can be used for custom permission settings. A common example would be to allow a user to print a document (or deny it): for this developers could assign the permission type `Custom1` and use it consistently in the system to check permissions and allow or disallow printing:

<tab category="permissions" article="permission-management" example="customPermission" />
