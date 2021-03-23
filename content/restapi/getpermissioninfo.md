---
title: GetPermissionInfo
metaTitle: "sensenet API - GetPermissionInfo"
metaDescription: "GetPermissionInfo"
---

## GetPermissionInfo
- Method: **GET** or optionally POST.

Assembles an object containing identity information (basic fields and all groups), inherited and subtree permissions.
 The result object will contain permission infos only for the provided content.

### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetPermissionInfo?identity=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetPermissionInfo
DATA:
models=[{
  "identity": _value_
}]
```
The `targetContent` can be any content type
### Parameters:
- **identity** (`string`): Path of the related user.

### Return value:
A PermissionInfo object. (Type: `object`).

### Requirements:
- **AllowedRoles**: Everyone

