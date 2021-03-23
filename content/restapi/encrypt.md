---
title: Encrypt
metaTitle: "sensenet API - Encrypt"
metaDescription: "Encrypt"
---

## Encrypt
- Method: **POST**.


### Request example:

```
POST /odata.svc/('Root')/Encrypt
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

