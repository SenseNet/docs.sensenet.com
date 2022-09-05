---
title: GetChildrenPermissionInfo
metaTitle: "sensenet API - GetChildrenPermissionInfo"
metaDescription: "GetChildrenPermissionInfo"
---

## GetChildrenPermissionInfo
- Method: **GET** or optionally POST.

Assembles an object containing identity information (basic fields and all groups), inherited and subtree permissions.
 The result object will contain permission infos for the children of the requested content and not the root.

### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetChildrenPermissionInfo?identity=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetChildrenPermissionInfo
DATA:
models=[{
  "identity": _value_
}]
```
The `targetContent` can be any content type
### Parameters:
- **identity** (`string`): Path of the related user.

### Return value:
A PermissionInfo object. (Type: `GetChildrenPermissionInfoResponse`).

### Requirements:
- **AllowedRoles**: Everyone

