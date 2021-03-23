---
title: PreviewAvailable
metaTitle: "sensenet API - PreviewAvailable"
metaDescription: "PreviewAvailable"
---

## PreviewAvailable
- Method: **GET** or optionally POST.


### Request example:

```
GET /odata.svc/Root/...('targetContent')/PreviewAvailable?page=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/PreviewAvailable
DATA:
models=[{
  "page": _value_
}]
```
The `targetContent` can be File
### Parameters:
- **page** (`int`): 

### Requirements:
- **AllowedRoles**: Everyone

