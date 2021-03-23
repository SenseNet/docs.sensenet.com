---
title: GetWopiData
metaTitle: "sensenet API - GetWopiData"
metaDescription: "GetWopiData"
---

## GetWopiData
- Method: **GET** or optionally POST.


### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetWopiData?context=_value_&action=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetWopiData
DATA:
models=[{
  "context": _value_, 
  "action": _value_
}]
```
### Parameters:
- **context** (`HttpContext`): 
- **action** (`string`): 

### Requirements:
- **RequiredPermissions**: Open

