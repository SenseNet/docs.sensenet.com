---
title: CreateLocalUser
metaTitle: "sensenet API - CreateLocalUser"
metaDescription: "CreateLocalUser"
---

## CreateLocalUser
- Method: **POST**.


### Request example:

```
POST /odata.svc/('Root')/CreateLocalUser
DATA:
models=[{
  "context": _value_, 
  "loginName": _value_, 
  "password": _value_, 
  "email": _value_
}]
```
Can only be called on the root content.
### Parameters:
- **context** (`HttpContext`): 
- **loginName** (`string`): 
- **password** (`string`): 
- **email** (`string`): 

### Requirements:
- **AllowedRoles**: Administrators

