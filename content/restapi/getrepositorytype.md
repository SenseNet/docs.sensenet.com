---
title: GetRepositoryType
metaTitle: "sensenet API - GetRepositoryType"
metaDescription: "GetRepositoryType"
---

## GetRepositoryType
- Method: **GET** or optionally POST.

Gets the type of the repository. This is 'standalone' by default.

### Request example:

```
GET /odata.svc/('Root')/GetRepositoryType
```
Can only be called on the root content.
### Parameters:
There are no parameters.

### Return value:
The type of the repository. (Type: `object`).

### Requirements:
- **AllowedRoles**: All

