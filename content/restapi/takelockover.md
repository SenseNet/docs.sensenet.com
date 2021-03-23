---
title: TakeLockOver
metaTitle: "sensenet API - TakeLockOver"
metaDescription: "TakeLockOver"
---

## TakeLockOver
- Method: **POST**.

Transfers the lock on the requested content to the target _user_.
 If the target _user_ is null, the target will be the current user.
 Current user must have `ForceCheckin` permission on the requested content.
 

### Exception
- ArgumentException: Thrown if the content is not checked out (unlocked).
 Also thrown if the _user_ cannot be recognized as a path or id of an existing
 `User`.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/TakeLockOver
DATA:
models=[{
  "user": _value_
}]
```
### Parameters:
- **user** (`string`): Path or id of the desired lock owner User.

### Return value:
`Ok` if the operation is executed successfully. (Type: `string`).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: ForceCheckin

