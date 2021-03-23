---
title: SetPageCount
metaTitle: "sensenet API - SetPageCount"
metaDescription: "SetPageCount"
---

## SetPageCount
- Method: **POST**.


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
- **pageCount** (`int`): 

### Requirements:
- **AllowedRoles**: Everyone

