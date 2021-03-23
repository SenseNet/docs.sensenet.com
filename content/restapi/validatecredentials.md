---
title: ValidateCredentials
metaTitle: "sensenet API - ValidateCredentials"
metaDescription: "ValidateCredentials"
---

## ValidateCredentials
- Method: **POST**.


### Request example:

```
POST /odata.svc/('Root')/ValidateCredentials
DATA:
models=[{
  "context": _value_, 
  "userName": _value_, 
  "password": _value_
}]
```
Can only be called on the root content.
### Parameters:
- **context** (`HttpContext`): 
- **userName** (`string`): 
- **password** (`string`): 

### Requirements:
- **AllowedRoles**: All

