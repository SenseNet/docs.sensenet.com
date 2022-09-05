---
title: CreateUserByProvider
metaTitle: "sensenet API - CreateUserByProvider"
metaDescription: "CreateUserByProvider"
---

## CreateUserByProvider
- Method: **POST**.

Creates an external user who registered using one of the available
 external providers.

### Request example:

```
POST /odata.svc/('Root')/CreateUserByProvider
DATA:
models=[{
  "provider": _value_, 
  "userId": _value_, 
  "claims": _value_
}]
```
Can only be called on the root content.
### Parameters:
- **provider** (`string`): Name of the provider (e.g. Google, GitHub).
- **userId** (`string`): External user id given by the provider.
- **claims** (`string`): List of claims given by the provider.

### Return value:
The newly created user content. (Type: `Content`).

### Requirements:
- **AllowedRoles**: Administrators

