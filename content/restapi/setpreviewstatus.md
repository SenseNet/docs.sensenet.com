---
title: SetPreviewStatus
metaTitle: "sensenet API - SetPreviewStatus"
metaDescription: "SetPreviewStatus"
---

## SetPreviewStatus
- Method: **POST**.


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
- **status** (`PreviewStatus`): 

### Requirements:
- **AllowedRoles**: Everyone

