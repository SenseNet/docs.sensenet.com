---
title: GetRelatedItems
metaTitle: "sensenet API - GetRelatedItems"
metaDescription: "GetRelatedItems"
---

## GetRelatedItems
- Method: **GET** or optionally POST.

Returns all content in the requested content's subtree that have permission settings
 filtered by permission value, user or group and a permission mask.

### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetRelatedItems?permissionLevel=_value_&explicitOnly=_value_&memberPath=_value_&permissions=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetRelatedItems
DATA:
models=[{
  "permissionLevel": _value_, 
  "explicitOnly": _value_, 
  "memberPath": _value_, 
  "permissions": _value_
}]
```
The `targetContent` can be any content type
### Parameters:
- **permissionLevel** (`string`): Filtering by permission value. It can be Allowed, Denied, AllowedOrDenied.
- **explicitOnly** (`bool`): Filter parameter for future use only. The currently allowed value is true.
- **memberPath** (`string`): Path of a group or user.
- **permissions** (`string[]`): Permission filter. Only those content will appear in the output that have permission settings that are listed in this list.

### Return value:
_Content_ list. (Type: `Content[]`).

### Requirements:
- **AllowedRoles**: Everyone

