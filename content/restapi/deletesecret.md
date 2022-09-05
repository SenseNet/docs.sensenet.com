---
title: DeleteSecret
metaTitle: "sensenet API - DeleteSecret"
metaDescription: "DeleteSecret"
---

## DeleteSecret
- Method: **POST**.

Deletes a secret.
 

It is necessary to provide both the client and secret identifiers for security reasons.

### Exceptions
- ArgumentNullException: 
- InvalidOperationException: 
- SenseNetSecurityException:

### Request example:

```
POST /odata.svc/('Root')/DeleteSecret
DATA:
models=[{
  "clientId": _value_, 
  "secretId": _value_
}]
```
Can only be called on the root content.
### Parameters:
- **clientId** (`string`): Client identifier.
- **secretId** (`string`): Secret identifier.

### Return value:
An empty result.

### Requirements:
- **AllowedRoles**: Administrators

