---
title: GetRelatedPermissions
metaTitle: "sensenet API - GetRelatedPermissions"
metaDescription: "GetRelatedPermissions"
---

## GetRelatedPermissions
- Method: **GET** or optionally POST.

Collects all permission settings on the given content and its subtree related to the specified user or group.
 The output is grouped by permission types and can be filtered by permission value or content type.

### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetRelatedPermissions?permissionLevel=_value_&explicitOnly=_value_&memberPath=_value_&includedTypes=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetRelatedPermissions
DATA:
models=[{
  "permissionLevel": _value_, 
  "explicitOnly": _value_, 
  "memberPath": _value_, 
  "includedTypes": _value_
}]
```
The `targetContent` can be any content type
### Parameters:
- **permissionLevel** (`string`): Filtering by permission value. It can be Allowed, Denied, AllowedOrDenied.
- **explicitOnly** (`bool`): Filter parameter for future use only. The currently allowed value is true.
- **memberPath** (`string`): Path of a group or user.
- **includedTypes** (`string[]`): Optional filter containing content type names.

### Return value:
An associative array containing the count of permission settings grouped by permissions. For example:
 { "See": 14, "Open": 5, "Save": 10, ...} (Type: `IDictionary<PermissionType, int>`).

### Requirements:
- **AllowedRoles**: Everyone

