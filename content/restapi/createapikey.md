---
title: CreateApiKey
metaTitle: "sensenet API - CreateApiKey"
metaDescription: "CreateApiKey"
---

## CreateApiKey
- Method: **POST**.

Creates an api key for the target user.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/CreateApiKey
```
The `targetContent` can be User
### Parameters:
There are no parameters.

### Return value:
The newly created API key. (Type: `ApiKey`).

### Requirements:
- **AllowedRoles**: All

