---
title: GetOpenApiDocument
metaTitle: "sensenet API - GetOpenApiDocument"
metaDescription: "GetOpenApiDocument"
---

## GetOpenApiDocument
- Method: **GET** or optionally POST.

Generates OpenApi v3 definition of the current sensenet API.
 WARNING: this version contains only the basic (CRUD) operations.

### Request example:

```
GET /odata.svc/('Root')/GetOpenApiDocument
```
Can only be called on the root content.
### Parameters:
There are no parameters.

### Return value:
OpenApi definition. (Type: `string`).

### Requirements:
- **AllowedRoles**: All

