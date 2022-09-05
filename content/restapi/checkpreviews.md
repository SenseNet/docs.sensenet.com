---
title: CheckPreviews
metaTitle: "sensenet API - CheckPreviews"
metaDescription: "CheckPreviews"
---

## CheckPreviews
- Method: **POST**.

Checks the number of pages and preview images of a document.

### Example

``` 
 {
     PageCount: 5,
     PreviewCount: 5
 }
```

### Request example:

```
POST /odata.svc/Root/...('targetContent')/CheckPreviews
DATA:
models=[{
  "generateMissing": _value_
}]
```
The `targetContent` can be File
### Parameters:
- **generateMissing** (`bool`): True if preview image generation should start
 in case images are missing.

### Return value:
A custom object containing page and preview count. (Type: `CheckPreviewsResponse`).

### Requirements:
- **AllowedRoles**: Everyone

