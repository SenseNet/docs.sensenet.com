---
title: HasPermission
metaTitle: "sensenet API - HasPermission"
metaDescription: "HasPermission"
---

## HasPermission
- Method: **GET** or optionally POST.

Returns whether the current or given user has the provided permissions on the requested content.
 The value is `true` if all requested permissions are allowed.

### Request example:

```
GET /odata.svc/Root/...('targetContent')/HasPermission?permissions=Open&permissions=RunApplication&user=/Root/IMS/BuiltIn/Portal/Visitor
```
or
```
POST /odata.svc/Root/...('targetContent')/HasPermission
DATA:
models=[{
  "permissions": ["Open", "RunApplication"], 
  "user": /Root/IMS/BuiltIn/Portal/Visitor
}]
```
The `targetContent` can be any content type
### Parameters:
- **permissions** (string[]): Permission name array.
- **user** (`string`) optional: Path of an existing user. If not specified,
 the current user's permission value will be returned.

### Return value:
Type: `bool`.

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: SeePermissions

