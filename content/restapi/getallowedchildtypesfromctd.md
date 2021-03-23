---
title: GetAllowedChildTypesFromCTD
metaTitle: "sensenet API - GetAllowedChildTypesFromCTD"
metaDescription: "GetAllowedChildTypesFromCTD"
---

## GetAllowedChildTypesFromCTD
- Method: **GET** or optionally POST.

Returns the list of content types that are allowed in the content type of the requested content.

### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetAllowedChildTypesFromCTD
```
### Parameters:
There are no parameters.

### Return value:
Content list of content types. (Type: `Content[]`).

### Requirements:
- **AllowedRoles**: Everyone

