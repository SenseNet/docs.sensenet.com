---
title: CreateLocalUser
metaTitle: "sensenet API - CreateLocalUser"
metaDescription: "CreateLocalUser"
---

## CreateLocalUser
- Method: **POST**.

Creates a local user who registered using a username and password.

### Request example:

```
POST /odata.svc/('Root')/CreateLocalUser
DATA:
models=[{
  "loginName": _value_, 
  "password": _value_, 
  "email": _value_
}]
```
Can only be called on the root content.
### Parameters:
- **loginName** (`string`): Login name.
- **password** (`string`): Password.
- **email** (`string`): Email address.

### Return value:
The newly created user content. (Type: `Content`).

### Requirements:
- **AllowedRoles**: Administrators

