---
title: GetRelatedIdentities
metaTitle: "sensenet API - GetRelatedIdentities"
metaDescription: "GetRelatedIdentities"
---

## GetRelatedIdentities
- Method: **GET** or optionally POST.

Returns users and groups that have explicit permissions on the given content or its subtree.

### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetRelatedIdentities?permissionLevel=_value_&identityKind=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetRelatedIdentities
DATA:
models=[{
  "permissionLevel": _value_, 
  "identityKind": _value_
}]
```
The `targetContent` can be any content type
### Parameters:
- **permissionLevel** (`string`): Filtering by permission level. It can be Allowed, Denied, AllowedOrDenied.
- **identityKind** (`string`): Filtering by identity kind. Valid values are: All, Users, Groups, OrganizationalUnits, UsersAndGroups, UsersAndOrganizationalUnits, GroupsAndOrganizationalUnits

### Return value:
_Content_ list containing related users and groups based on the _identityKind_ filter. (Type: `Content[]`).

### Requirements:
- **AllowedRoles**: Everyone

