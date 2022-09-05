---
title: RegeneratePreviews
metaTitle: "sensenet API - RegeneratePreviews"
metaDescription: "RegeneratePreviews"
---

## RegeneratePreviews
- Method: **POST**.

Sets the preview status of the document to In progress
 and starts generating preview images - regardless of existing images.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/RegeneratePreviews
```
The `targetContent` can be File
### Parameters:
There are no parameters.

### Return value:
A response object containing the current page count (likely to be
 -1 meaning In progress and 0 as the current preview count). (Type: `RegeneratePreviewsResponse`).

### Requirements:
- **AllowedRoles**: Everyone

