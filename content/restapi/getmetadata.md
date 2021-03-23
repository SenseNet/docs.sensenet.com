---
title: GetMetadata
metaTitle: "sensenet API - GetMetadata"
metaDescription: "GetMetadata"
---

## GetMetadata
- Method: **GET** or optionally POST.

Generic OData action method for collecting all fields of all types in the system.

### Request example:
Compulsory generic OData action parameter, currently not used.
```
GET /odata.svc/Root/...('targetContent')/GetMetadata
```
### Parameters:
There are no parameters.

### Return value:
Two arrays: one with regular fields and one for aspect fields. (Type: `string`).

### Requirements:
- **AllowedRoles**: Everyone

