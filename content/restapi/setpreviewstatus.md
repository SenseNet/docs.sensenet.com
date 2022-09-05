---
title: SetPreviewStatus
metaTitle: "sensenet API - SetPreviewStatus"
metaDescription: "SetPreviewStatus"
---

## SetPreviewStatus
- Method: **POST**.

Sets the preview status if a document.
 Available options are the following:
 - NoProvider,
 - Postponed,
 - Error,
 - NotSupported,
 - InProgress,
 - EmptyDocument

### Request example:

```
POST /odata.svc/Root/...('targetContent')/SetPreviewStatus
DATA:
models=[{
  "status": _value_
}]
```
The `targetContent` can be File
### Parameters:
- **status** (`PreviewStatus`): Preview status value as a string.

### Requirements:
- **AllowedRoles**: Everyone

