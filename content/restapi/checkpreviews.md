---
title: CheckPreviews
metaTitle: "sensenet API - CheckPreviews"
metaDescription: "CheckPreviews"
---

## CheckPreviews
- Method: **POST**.


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
- **generateMissing** (`bool`): 

### Requirements:
- **AllowedRoles**: Everyone

