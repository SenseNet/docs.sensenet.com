---
title|Permissions
metaTitle|"sensenet API - Permissions"
metaDescription|"Permissions"
---

sensenet has a flexible permission system for controlling the accessibility of content on different levels. You are able to set permissions (allow or deny) for individual users or groups, on individual documents or whole libraries and workspaces. Managing and visualizing the permission settings is of course available and can be done through OData REST API.

# List of built-in permissions

|  |  |
|--|--|
|**See**|controls whether the user is allowed to see the content (ie. visible in a list, but field data cannot be accessed)|
|**Restricted permissions**|controls whether the user is allowed to see a permissions of a document. All field data can be accessed, except binary fields.|
|**Preview without watermark**|controls whether the user is allowed to see a permissions of a document without a watermark. All field data can be accessed, except binary fields.|
|**Preview without redaction**|controls whether the user is allowed to see a permissions of a Content (e.g. a document) without redaction. All field data can be accessed, except binary fields.|
|**Open**|controls whether the user is allowed to open the content to see and access its field data|
|**Open minor**|controls whether the user is allowed to open minor versions of the content and see corresponding field data|
|**Save**|controls saving of the content|
|**Publish**|controls publishing of the content|
|**Force undo checkout**|controls whether the user is allowed to undo pending changes when the content is checked out by someone else|
|**Add new**|controls creation of new content under the given container|
|**Approve**|controls approval of the content|
|**Delete**|controls deletion of the content|
|**Recall old version**|controls whether the user is permitted to restore an old version of the content|
|**See permissions**|controls whether the user is allowed to see permission settings for the content|
|**Set permissions**|controls whether the user is allowed to change permission settings for the content|
|**Run application**|controls whether the user is allowed to use the content by an application.|

# What is a permission entry?

Permission entry is the base building block of sensenet's permission management, represents a user or a group content and its permission settings. When you want to allow or deny permissions on a content or a subtree for a user you're actually adding a new permission entry or modifying an existing one. All permission entries contain an identity (user or group), the info whether the actual entry is defined on an ancestor (permissions are inherited) and list of all the permissions and the settings are made on the current content for the entry.

```
{
  "identity": {
    "id": 1154,
    "path": "/Root/IMS/Public/businesscat",
    "name": "businesscat",
    "displayName": "Business Cat",
    "domain": null,
    "kind": "user"
  },
  "propagates": true,
  "permissions": {
    "See": null,
    "Preview": null,
    "PreviewWithoutWatermark": null,
    "PreviewWithoutRedaction": null,
    "Open": null,
    "OpenMinor": null,
    "Save": null
    ...
  }
}
```

# Get permission entries of a content

With the next example you are able to get the list of entries with permission settings on the specified content:

<tab category="permissions" article="permissions" example="getPermissionEntries" />

# Get full access control list of a content

With the following sample you can get the list of all the entries (users and groups) that have permissions settings (inherited or direct) on the given content:

<tab category="permissions" article="permissions" example="getAcl" />

The response of the request above looks like the following:

```
{
      "id": 1284,
      "path": "/Root/Content/Sales",
      "inherits": true,
      "entries": [
         {
            "identity": {
               "id": 7,
               "path": "/Root/IMS/BuiltIn/Portal/Administrators",
               "name": "Administrators",
               "displayName": "Administrators",
               "domain": null,
               "kind": "group",
               "avatar": null
            },
            "ancestor": "/Root/Content"
            "inherited": true,
            "propagates": true,
            "permissions": {
               "See": {
                  "value": "allow",
                  "from": "/Root/Content",
                  "identity": "/Root/IMS/BuiltIn/Portal/Administrators"
               },
               "Preview": {
                  "value": "allow",
                  "from": "/Root/Content"
               },
               "PreviewWithoutWatermark": {
                  "value": "allow",
                  "from": "/Root/Content"
               },
               "PreviewWithoutRedaction": {
                  "value": "allow",
                  "from": "/Root/Content"
               },
               "Open": {
                  "value": "allow",
                  "from": "/Root/Content"
               },
               ...
            }
         },
         {
            "identity": {
               "id": 1159,
               "path": "/Root/IMS/Public/devdog",
               "name": "devdog",
               "displayName": "Developer Dog",
               "domain": null,
               "kind": "user"
            },
            "inherited": false,
            "propagates": true,
            "permissions": {
               "See": {
                  "value": "allow",
                  "from": null
               },
               "Preview": {
                  "value": "allow",
                  "from": null
               },
               "PreviewWithoutWatermark": {
                  "value": "allow",
                  "from": null
               },
               "PreviewWithoutRedaction": {
                  "value": "allow",
                  "from": null
               },
               "Open": {
                  "value": "allow",
                  "from": null
               },
               ...
            }
         },
      ]
   }
```

# Get a permissions entry of a specific user or group

You can add a specific user or group to the example above to filter the entry list and get only those that are related to the given entity in this case to the *Editors* group:

<tab category="permissions" article="permissions" example="getPermissionEntry" />
&nbsp;
<note severity="info">Above mentioned method could be used with workspace local groups as well.</note>

# Check user access

The next example shows you how you can check whether a user can or cannot access a content. We do not specify a user in the following example that means the system will check the permissions of the currently logged-in user:

<tab category="permissions" article="permissions" example="hasPermission" />

# How can I check why a user cannot access a content?

Of course you can use the above mentioned stuff to check access of a specified user using the identity param:

<tab category="permissions" article="permissions" example="hasPermissionUser" />
&nbsp;
<note severity="info">Groups, users or even workspace local groups can be added as identity.</note>

# How can I check why a user cannot save a content?

You can search permission entries by all the available permissions, as in the following example by Save for knowing if the given user is able to save the content or not:
&nbsp;
<tab category="permissions" article="permissions" example="canSave" />

# Check if I can see the permission settings

The above mentioned things are available if the user who use them are allowed to see permissions so he/she has *SeePermissions* permission allowed. You can also check wether a user can see permissions or not as in the above mentioned examples but now with the *SeePermissions*:

<tab category="permissions" article="permissions" example="canSeePermissions" />
