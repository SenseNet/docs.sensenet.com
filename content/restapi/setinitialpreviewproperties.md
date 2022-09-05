---
title: SetInitialPreviewProperties
metaTitle: "sensenet API - SetInitialPreviewProperties"
metaDescription: "SetInitialPreviewProperties"
---

## SetInitialPreviewProperties
- Method: **POST**.

Sets the initial security-related properties (Owner, CreatedBy, etc.)
 of a preview image automatically. The values come from the original document.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/SetInitialPreviewProperties
```
The `targetContent` can be PreviewImage
### Parameters:
There are no parameters.

### Requirements:
- **AllowedRoles**: Everyone

