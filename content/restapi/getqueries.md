---
title: GetQueries
metaTitle: "sensenet API - GetQueries"
metaDescription: "GetQueries"
---

## GetQueries
- Method: **GET** or optionally POST.


### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetQueries?onlyPublic=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetQueries
DATA:
models=[{
  "onlyPublic": _value_
}]
```
### Parameters:
- **onlyPublic** (`bool`) optional: 

### Requirements:
- **AllowedRoles**: Everyone

