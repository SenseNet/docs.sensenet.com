---
title: Complex Permission Queries
metaTitle: "sensenet API - Complex Permission Queries"
metaDescription: "Complex Permission Queries"
---

Following examples contains information about the sensenet API for querying permission setting overviews in a subtree. To use this API the logged in user must have subtree *SeePermission* permission on the root content.
These permission queries could be used the same as other OData request so $select, $filter and all the others are available.

# Get all identities connected to a content

With the following example you can get a list of all the users, groups and organizational units that have permissions set on a specified subtree. You are able to filter by level (*AllowedOrDenied*) and by type of identity (*All*, *Users*, *Groups*, *OrganizationalUnits*, *UsersAndGroups*, *UsersAndOrganizationalUnits*, *GroupsAndOrganizationalUnits*).

<tab category="permissions" article="permission-queries" example="getRelatedIdentities" />

Response will be something like that one below:

```
{
      "d": {
         "__count": 7,
         "results": [
            {
               "Id": 1178,
               "Path": "/Root/Content/IT/Groups/Members",
               "Name": "Members"
            },
            {
               "Id": 1179,
               "Path": "/Root/Content/IT/Groups/Owners",
               "Name": "Owners"
            },
            {
               "Id": 1180,
               "Path": "/Root/Content/IT/Groups/Visitors",
               "Name": "Visitors"
            },
            {
               "Id": 7,
               "Path": "/Root/IMS/BuiltIn/Portal/Administrators",
               "Name": "Administrators"
            },
            {
               "Id": 1152,
               "Path": "/Root/IMS/Public/Administrators",
               "Name": "Administrators"
            },
            {
               "Id": 1158,
               "Path": "/Root/IMS/Public/Editors",
               "Name": "Editors"            },
            {
               "Id": 8,
               "Path": "/Root/IMS/BuiltIn/Portal/Everyone",
               "Name": "Everyone"
            }
         ]
      }
   }
```

# Count number of permissions settings per identity

Following returns a permission list of the selected identity with the count of related content, setting fully qualified path of the selected identity at the *members* param.

<tab category="permissions" article="permission-queries" example="getRelatedPermissions" />

Result list will be something like this:

```
{
    "See": 48,
    "Preview": 48,
    "PreviewWithoutWatermark": 48,
    "PreviewWithoutRedaction": 48,
    "Open": 48,
    "OpenMinor": 1,
    "Save": 1,
    "Publish": 0,
    "ForceCheckin": 0,
    "AddNew": 1,
    "Approve": 0,
    "Delete": 0,
    "RecallOldVersion": 0,
    "DeleteOldVersion": 0,
    "SeePermissions": 0,
    "SetPermissions": 0,
    "RunApplication": 48,
    "ManageListsAndWorkspaces": 0,
    "Custom01": 0,
    "Custom02": 0,
    "Custom03": 0,
    "Custom04": 0,
    "Custom05": 0,
    "Custom06": 0,
    "Custom07": 0,
    "Custom08": 0,
    "Custom09": 0,
    "Custom10": 0,
    "Custom11": 0,
    "Custom12": 0,
    "Custom13": 0,
    "Custom14": 0
}
```

# Get content with permission settings for a specific identity

Returns a content list that have explicit/effective permission setting for the selected user in the given subtree.

<tab category="permissions" article="permission-queries" example="getRelatedItems" />

Response will be similar that the one below:

```
{
      "d": {
         "__count": 1,
         "results": [
            {
               "Id": 1177,
               "Path": "/Root/Content/IT/Groups",
               "Name": "Groups"
            }
         ]
      }
   }
```

# Get identities related to a permission in a subtree

The following request is designed for getting content that are permitted or denied for groups/organizational units in the selected subtree by permission, where *kind* is the type of identity and *permissions* is the list of related permissions.

<tab category="permissions" article="permission-queries" example="getRelatedIdentitiesByPermissions" />

Returns something that this json below:

```
{
      "d": {
         "__count": 7,
         "results": [
            {
               "Id": 1178,
               "Path": "/Root/Content/IT/Groups/Members",
               "Name": "Members"
            },
            {
               "Id": 1179,
               "Path": "/Root/Content/IT/Groups/Owners",
               "Name": "Owners"
            },
            {
               "Id": 1180,
               "Path": "/Root/Content/IT/Groups/Visitors",
               "Name": "Visitors"
            },
            {
               "Id": 7,
               "Path": "/Root/IMS/BuiltIn/Portal/Administrators",
               "Name": "Administrators"
            },
            {
               "Id": 1152,
               "Path": "/Root/IMS/Public/Administrators",
               "Name": "Administrators"
            },
            {
               "Id": 1158,
               "Path": "/Root/IMS/Public/Editors",
               "Name": "Editors" build and save custom search queries."
            },
            {
               "Id": 8,
               "Path": "/Root/IMS/BuiltIn/Portal/Everyone",
               "Name": "Everyone"
            }
         ]
      }
   }

```

# Get contents related to a permission in a container

The following request is designed for getting content that are permitted or denied for groups/organizational units in the selected container by permission, where *member* is the selected identity and *permissions* is the list of related permissions.

<tab category="permissions" article="permission-queries" example="getRelatedItemsOneLevel" />

The result list will be something similar that the one below:

```
{
      "d": {
         "__count": 6,
         "results": [
            {
               "Id": 1165,
               "Path": "/Root/Content/IT/Calendar",
               "Name": "Calendar"
            },
            {
               "Id": 1176,
               "Path": "/Root/Content/IT/Document_Library",
               "Name": "Document_Library"
            },
            {
               "Id": 1181,
               "Path": "/Root/Content/IT/ImageLibrary",
               "Name": "ImageLibrary"
            },
            {
               "Id": 1192,
               "Path": "/Root/Content/IT/Links",
               "Name": "Links"
            },
            {
               "Id": 1203,
               "Path": "/Root/Content/IT/Memos",
               "Name": "Memos"
            },
            {
               "Id": 1214,
               "Path": "/Root/Content/IT/Tasks",
               "Name": "Tasks"
            }
         ]
      }
   }
```

# Get list of users allowed to do something

Following request returns a content collection that represents users who have enough permissions to a requested resource. The permissions effect on the user and through direct or indirect group membership too. The function parameter is a permission name list that must contain at least one item, in this case it is the *Open* permission:

<tab category="permissions" article="permission-queries" example="getAllowedUsers" />

The result will be something similar that the one below:

```
{
      "d": {
         "__count": 4,
         "results": [
            {
               "Id": 1,
               "Path": "/Root/IMS/BuiltIn/Portal/Admin",
               "Name": "Admin"
            },
            {
               "Id": 1141,
               "Path": "/Root/IMS/BuiltIn/Portal/previewadmin",
               "Name": "previewadmin"
            },
            {
               "Id": 1154,
               "Path": "/Root/IMS/Public/businesscat",
               "Name": "businesscat"
            },
            {
               "Id": 1157,
               "Path": "/Root/IMS/Public/editormanatee",
               "Name": "editormanatee"
            }
         ]
      }
   }
```

# List of group memberships of a user

The response of the following request is a list of groups where the given user is a member directly or indirectly. The result list can be filtered by the optional param *directOnly* to get only those groups where the user is a member directly:

<tab category="permissions" article="permission-queries" example="getParentGroups" />

Results will be something similar that the one below:

```
{
      "d": {
         "__count": 1,
         "results": [
            {
               "Id": 1152,
               "Path": "/Root/IMS/Public/Administrators",
               "Name": "Administrators"
            }
         ]
      }
   }
```
