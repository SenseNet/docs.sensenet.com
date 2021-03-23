---
title: CreateUserByProvider
metaTitle: "sensenet API - CreateUserByProvider"
metaDescription: "CreateUserByProvider"
---

## CreateUserByProvider
- Method: **POST**.


### Request example:

```
POST /odata.svc/('Root')/CreateUserByProvider
DATA:
models=[{
  "context": _value_, 
  "provider": _value_, 
  "userId": _value_, 
  "claims": _value_
}]
```
Can only be called on the root content.
### Parameters:
- **context** (`HttpContext`): 
- **provider** (`string`): 
- **userId** (`string`): 
- **claims** (`string`): 

### Requirements:
- **AllowedRoles**: Administrators

