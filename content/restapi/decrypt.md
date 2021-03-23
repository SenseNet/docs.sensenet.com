---
title: Decrypt
metaTitle: "sensenet API - Decrypt"
metaDescription: "Decrypt"
---

## Decrypt
- Method: **POST**.


### Request example:

```
POST /odata.svc/('Root')/Decrypt
DATA:
models=[{
  "text": _value_
}]
```
Can only be called on the root content.
### Parameters:
- **text** (`string`): 

### Requirements:
- **AllowedRoles**: Administrators, Developers

