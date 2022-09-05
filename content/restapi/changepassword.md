---
title: ChangePassword
metaTitle: "sensenet API - ChangePassword"
metaDescription: "ChangePassword"
---

## ChangePassword
- Method: **POST**
- Icon: **"security"**.

Changes the password of the target user directly.
 

This action can be called only by the users themselves or
 by administrators who have save access on the user.

### Exceptions
- ArgumentNullException: 
- SenseNetSecurityException: 
- InvalidOperationException:

### Request example:

```
POST /odata.svc/Root/...('targetContent')/ChangePassword
DATA:
models=[{
  "password": _value_
}]
```
The `targetContent` can be User
### Parameters:
- **password** (`string`): The new password.

### Return value:
An empty result.

### Requirements:
- **RequiredPermissions**: Open
- **Scenarios**: ContextMenu

