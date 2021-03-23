---
title: GetParentGroups
metaTitle: "sensenet API - GetParentGroups"
metaDescription: "GetParentGroups"
---

## GetParentGroups
- Method: **GET** or optionally POST.

Returns all groups where the given user or group is member directly or indirectly.

### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetParentGroups?directOnly=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetParentGroups
DATA:
models=[{
  "directOnly": _value_
}]
```
The `targetContent` can be Group, User
### Parameters:
- **directOnly** (`bool`): Whether only direct membership is requested.

### Return value:
_Content_ list of the groups. (Type: `Content[]`).

### Requirements:
- **AllowedRoles**: Everyone

