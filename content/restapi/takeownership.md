---
title: TakeOwnership
metaTitle: "sensenet API - TakeOwnership"
metaDescription: "TakeOwnership"
---

## TakeOwnership
- Method: **POST**.

Sets the provided _userOrGroup_ as the owner of the requested content.
 If the _userOrGroup_ is null, the current user will be the owner.
 The operation requires `TakeOwnership` permission.
 

### Exception
- ArgumentException: Thrown if the _userOrGroup_ parameter cannot be recognized
 as a path or id. The method also throws this exception if the identified content is not a User or a Group.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/TakeOwnership
DATA:
models=[{
  "userOrGroup": _value_
}]
```
### Parameters:
- **userOrGroup** (`string`): Path or id of the desired owner.

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: TakeOwnership

