---
title: SendChangePasswordMail
metaTitle: "sensenet API - SendChangePasswordMail"
metaDescription: "SendChangePasswordMail"
---

## SendChangePasswordMail
- Method: **POST**
- Icon: **"security"**.

Sends change password email to the target user.
 

This action can be called only by the users themselves or
 by administrators who have save access on the user.

### Exceptions
- SenseNetSecurityException: 
- InvalidOperationException:

### Request example:

```
POST /odata.svc/Root/...('targetContent')/SendChangePasswordMail
DATA:
models=[{
  "returnUrl": _value_
}]
```
The `targetContent` can be User
### Parameters:
- **returnUrl** (`string`) optional: Return url to be included in the email.

### Return value:
An empty result. (Type: `Task`).

### Requirements:
- **RequiredPermissions**: Open

