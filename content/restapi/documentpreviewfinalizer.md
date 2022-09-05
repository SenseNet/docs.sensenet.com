---
title: DocumentPreviewFinalizer
metaTitle: "sensenet API - DocumentPreviewFinalizer"
metaDescription: "DocumentPreviewFinalizer"
---

## DocumentPreviewFinalizer
- Method: **POST**.

Finalizes a preview generation task for a document.
 This action is intended for internal use by the Task Management
 module.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/DocumentPreviewFinalizer
DATA:
models=[{
  "result": _value_
}]
```
### Parameters:
- **result** (`SnTaskResult`): Result of the preview generation task.

### Return value:
Type: `Task`.

### Requirements:
- **AllowedRoles**: Everyone

