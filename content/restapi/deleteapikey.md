---
title: DeleteApiKey
metaTitle: "sensenet API - DeleteApiKey"
metaDescription: "DeleteApiKey"
---

## DeleteApiKey
- Method: **POST**.

Deletes an API key.
 

### Exception
- ArgumentNullException:

### Request example:

```
POST /odata.svc/Root/...('targetContent')/DeleteApiKey
DATA:
models=[{
  "apiKey": _value_
}]
```
The `targetContent` can be User, PortalRoot
### Parameters:
- **apiKey** (`string`): API key identifier.

### Return value:
An empty result.

### Requirements:
- **AllowedRoles**: All

