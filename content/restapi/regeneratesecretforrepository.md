---
title: RegenerateSecretForRepository
metaTitle: "sensenet API - RegenerateSecretForRepository"
metaDescription: "RegenerateSecretForRepository"
---

## RegenerateSecretForRepository
- Method: **POST**.

Regenerates a secret.

### Request example:

```
POST /odata.svc/('Root')/RegenerateSecretForRepository
DATA:
models=[{
  "clientId": _value_, 
  "secretId": _value_, 
  "validTill": _value_
}]
```
Can only be called on the root content.
### Parameters:
- **clientId** (`string`): Client identifier.
- **secretId** (`string`): Secret identifier.
- **validTill** (`DateTime?`) optional: Expiration date. Default: maximum date value.

### Return value:
The newly generated secret. (Type: `ClientSecret`).

### Requirements:
- **AllowedRoles**: Administrators

