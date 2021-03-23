---
title: GetRelatedIdentitiesByPermissions
metaTitle: "sensenet API - GetRelatedIdentitiesByPermissions"
metaDescription: "GetRelatedIdentitiesByPermissions"
---

## GetRelatedIdentitiesByPermissions
- Method: **GET** or optionally POST.

Returns users and groups that have explicit permissions on the given content or its subtree.

### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetRelatedIdentitiesByPermissions?permissionLevel=_value_&identityKind=_value_&permissions=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetRelatedIdentitiesByPermissions
DATA:
models=[{
  "permissionLevel": _value_, 
  "identityKind": _value_, 
  "permissions": _value_
}]
```
The `targetContent` can be any content type
### Parameters:
- **permissionLevel** (`string`): Filtering by permission level. It can be Allowed, Denied, AllowedOrDenied.
- **identityKind** (`string`): Filtering by identity kind. Valid values are: All, Users, Groups, OrganizationalUnits, UsersAndGroups, UsersAndOrganizationalUnits, GroupsAndOrganizationalUnits
- **permissions** (`string[]`): Filtering by permission type.

### Return value:
Filtered _Content_ list that have the provided permissions. (Type: `Content[]`).

### Requirements:
- **AllowedRoles**: Everyone

