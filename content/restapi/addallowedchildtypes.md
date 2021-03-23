---
title: AddAllowedChildTypes
metaTitle: "sensenet API - AddAllowedChildTypes"
metaDescription: "AddAllowedChildTypes"
---

## AddAllowedChildTypes
- Method: **POST**.

Extends the requested content's AllowedChildTypes collection with the provided Content types.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/AddAllowedChildTypes
DATA:
models=[{
  "contentTypes": ["Task", "Event"]
}]
```
### Parameters:
- **contentTypes** (`string[]`): The extension.

### Return value:
Empty string. (Type: `string`).

### Requirements:
- **AllowedRoles**: Everyone

