---
title: SetPageCount
metaTitle: "sensenet API - SetPageCount"
metaDescription: "SetPageCount"
---

## SetPageCount
- Method: **POST**.

Sets the page count of the document.
 This action does not generate preview images.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/SetPageCount
DATA:
models=[{
  "pageCount": _value_
}]
```
The `targetContent` can be File
### Parameters:
- **pageCount** (`int`): Page count value

### Requirements:
- **AllowedRoles**: Everyone

