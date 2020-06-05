---
title: Permission Management
metaTitle: "sensenet API - Permission Management"
metaDescription: "Permission management"
---

# Allow a user to save a content

# Allow a group (role) to approve content in a document library

# Prohibit a user from deleting content from a folder

# Local only

# Break

# Using custom permissions

There might be some cases when it is desired to define custom permissions on content (for example if you want to control whether a specific user is allowed to print a certain document or not). This setting would be much more than a simple global role (group), since the setting could vary for different content and for different users at the same time. Besides the above mentioned built-in permission types sensenet make 14 custom permission type (Custom01, Custom02, etc.) available, that can be used for custom permission settings. A common example would be to allow a user to print a document (or deny it): for this developers could assign the permission type `Custom1` and use it consistently in the system to check permissions and allow or disallow printing.



setpermissions
