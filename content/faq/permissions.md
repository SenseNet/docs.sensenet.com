---
title: "Permissions"
metaTitle: "sensenet FAQ - Permissions"
metaDescription: "sensenet FAQ - Permissions"
---

> If you are looking for a more structured information please visit the [User and permission management](/concepts/user-and-permission-management) article.

# What is the difference between Open and OpenMinor permissions?
Users with **OpenMinor** permissions can access (read or download) minor versions of files (for example `1.2`, `1.3`) while users with **Open** permissions may see **only major versions** (`1.0`, `2.0`) even if there are newer draft versions in the repository.

# What happens if a user has Open and Deny permissions for the same content or folder at the same time?
Deny is always stronger. This means that that user (or group) will not have access to those content items.

# Where can I find the Break inheritance and Deny permissions on the UI?
Currently these features considered as advanced features and only available through our OData REST api. Developers may use them (see [Permissions API docs](/api-docs/permissions) for details) or provide a custom user interface for them in your application, but they are not accessible from our built-in admin UI. 

# Can I define permissions on content items for individual users?
Certainly, the same way as for groups. But in a large enterprise environment is always better if you define permissions for groups, because managing group memberhsips is always easier than managing permissions throughout the repository.

# Can I somehow access content items from the browser if the current user does not have permissions for them?
Not possible, that is the point of the permission system: you cannot circumvent it. For scenarios like tools that need to access the repository as administrators, we have client ids and secrets, and also API keys. For more details please visit the [Authentication](/tutorials/authentication) article.