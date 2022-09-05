---
title: GetApiKeys
metaTitle: "sensenet API - GetApiKeys"
metaDescription: "GetApiKeys"
---

## GetApiKeys
- Method: **GET** or optionally POST.

Gets API keys related to the target user.

### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetApiKeys
```
The `targetContent` can be User
### Parameters:
There are no parameters.

### Return value:
An object containing an array of API keys related to the target user. (Type: `object`).

### Requirements:
- **AllowedRoles**: All

