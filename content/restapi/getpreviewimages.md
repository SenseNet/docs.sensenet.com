---
title: GetPreviewImages
metaTitle: "sensenet API - GetPreviewImages"
metaDescription: "GetPreviewImages"
---

## GetPreviewImages
- Method: **GET** or optionally POST.

Gets all preview images for a content. If any of the images are
 missing or the page count is not yet determined, it starts preview
 generation and waits for it to complete. This may last long in case
 of a huge document.

### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetPreviewImages
```
The `targetContent` can be File
### Parameters:
There are no parameters.

### Return value:
The list of preview images. Thumbnail images are not included. (Type: `Content[]`).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Preview

