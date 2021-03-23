---
title: GetRelatedItemsOneLevel
metaTitle: "sensenet API - GetRelatedItemsOneLevel"
metaDescription: "GetRelatedItemsOneLevel"
---

## GetRelatedItemsOneLevel
- Method: **GET** or optionally POST.

Returns all content in the requested content's direct child collection that have permission settings
 filtered by permission value, user or group and a permission mask.

### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetRelatedItemsOneLevel?permissionLevel=_value_&memberPath=_value_&permissions=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetRelatedItemsOneLevel
DATA:
models=[{
  "permissionLevel": _value_, 
  "memberPath": _value_, 
  "permissions": _value_
}]
```
The `targetContent` can be any content type
### Parameters:
- **permissionLevel** (`string`): Filtering by permission value. It can be Allowed, Denied, AllowedOrDenied.
- **memberPath** (`string`): Path of a group or user.
- **permissions** (`string[]`): Only those content will appear in the output that have permission settings that are listed in this list.

### Return value:
Filtered _Content_ list that have the provided permissions. (Type: `Content[]`).

### Requirements:
- **AllowedRoles**: Everyone

