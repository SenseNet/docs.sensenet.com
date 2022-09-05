---
title: GetContentCountInTree
metaTitle: "sensenet API - GetContentCountInTree"
metaDescription: "GetContentCountInTree"
---

## GetContentCountInTree
- Method: **GET** or optionally POST.

Returns the count of all contents in the requested subtree.

### Request example:
The root of the requested subtree.
```
GET /odata.svc/Root/...('targetContent')/GetContentCountInTree
```
### Parameters:
There are no parameters.

### Return value:
Count of contents. (Type: `int`).

### Requirements:
- **AllowedRoles**: Everyone

