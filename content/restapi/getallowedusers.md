---
title: GetAllowedUsers
metaTitle: "sensenet API - GetAllowedUsers"
metaDescription: "GetAllowedUsers"
---

## GetAllowedUsers
- Method: **GET** or optionally POST.

Returns all users that have all given permission on the entity.
 Users will be included in the result set even if the permissions are granted on a group
 where they are members directly or indirectly.

### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetAllowedUsers?permissions=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetAllowedUsers
DATA:
models=[{
  "permissions": _value_
}]
```
The `targetContent` can be any content type
### Parameters:
- **permissions** (`string[]`): Only those users appear in the output that have permission settings
 in connection with the given permissions.

### Return value:
Filtered _Content_ list of the users that have the provided permissions. (Type: `Content[]`).

### Requirements:
- **AllowedRoles**: Everyone

