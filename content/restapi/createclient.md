---
title: CreateClient
metaTitle: "sensenet API - CreateClient"
metaDescription: "CreateClient"
---

## CreateClient
- Method: **POST**.

Creates a client.
 

### Exception
- InvalidOperationException:

### Request example:

```
POST /odata.svc/('Root')/CreateClient
DATA:
models=[{
  "name": _value_, 
  "type": _value_, 
  "userName": _value_
}]
```
Can only be called on the root content.
### Parameters:
- **name** (`string`): Name of the client.
- **type** (`string`): Client type. Common types are ExternalClient, ExternalSpa, InternalClient
- **userName** (`string`) optional: Optional domain and username to register the client to.

### Return value:
The newly created client. (Type: `Client`).

### Requirements:
- **AllowedRoles**: Administrators

