---
title: Encrypt
metaTitle: "sensenet API - Encrypt"
metaDescription: "Encrypt"
---

## Encrypt
- Method: **POST**.

Encrypts a short text using the current crypto service provider.

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
- **text** (`string`): The text to encrypt.

### Return value:
The encrypted text. (Type: `string`).

### Requirements:
- **AllowedRoles**: Administrators, Developers

