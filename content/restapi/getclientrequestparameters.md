---
title: GetClientRequestParameters
metaTitle: "sensenet API - GetClientRequestParameters"
metaDescription: "GetClientRequestParameters"
---

## GetClientRequestParameters
- Method: **GET** or optionally POST.


### Request example:

```
GET /odata.svc/('Root')/GetClientRequestParameters?context=_value_&clientType=_value_
```
or
```
POST /odata.svc/('Root')/GetClientRequestParameters
DATA:
models=[{
  "context": _value_, 
  "clientType": _value_
}]
```
Can only be called on the root content.
### Parameters:
- **context** (`HttpContext`): 
- **clientType** (`string`): 

### Requirements:
- **AllowedRoles**: All

