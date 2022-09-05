---
title: SendChangePasswordMail
metaTitle: "sensenet API - SendChangePasswordMail"
metaDescription: "SendChangePasswordMail"
---

## SendChangePasswordMail
- Method: **POST**
- Icon: **"security"**.

Sends change password email to the specified email address.
 

This action can be called only by the users themselves or
 by administrators who have save access on the user.

### Exception
- ArgumentNullException:

### Request example:

```
POST /odata.svc/('Root')/SendChangePasswordMail
DATA:
models=[{
  "email": _value_, 
  "returnUrl": _value_
}]
```
Can only be called on the root content.
### Parameters:
- **email** (`string`): Email address.
- **returnUrl** (`string`) optional: Return url to be included in the email.

### Return value:
An empty result. (Type: `Task`).

### Requirements:
- **AllowedRoles**: All

