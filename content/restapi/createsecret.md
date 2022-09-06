---
title: CreateSecret
metaTitle: "sensenet API - CreateSecret"
metaDescription: "CreateSecret"
---

## CreateSecret
- Method: **POST**.

Creates a secret for the specified client.
 

### Exceptions
- InvalidOperationException: 
- SenseNetSecurityException:

### Request example:

```
POST /odata.svc/('Root')/CreateSecret
DATA:
models=[{
  "clientId": _value_, 
  "validTill": _value_
}]
```
Can only be called on the root content.
### Parameters:
- **clientId** (`string`): Client identifier.
- **validTill** (`DateTime?`) optional: Expiration date. Default: maximum date value.

### Return value:
The newly created secret. (Type: `ClientSecret`).

### Requirements:
- **AllowedRoles**: Administrators

