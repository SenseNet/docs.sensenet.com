---
title: DeleteClient
metaTitle: "sensenet API - DeleteClient"
metaDescription: "DeleteClient"
---

## DeleteClient
- Method: **POST**.

Deletes a client.
 

### Exceptions
- ArgumentNullException: 
- InvalidOperationException: 
- SenseNetSecurityException:

### Request example:

```
POST /odata.svc/('Root')/DeleteClient
DATA:
models=[{
  "clientId": _value_
}]
```
Can only be called on the root content.
### Parameters:
- **clientId** (`string`): Client identifier.

### Return value:
An empty result.

### Requirements:
- **AllowedRoles**: Administrators

