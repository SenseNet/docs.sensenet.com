---
title: GetSchema
metaTitle: "sensenet API - GetSchema"
metaDescription: "GetSchema"
---

## GetSchema
- Method: **GET** or optionally POST.


### Request example:

```
GET /odata.svc/('Root')/GetSchema?contentTypeName=_value_
```
or
```
POST /odata.svc/('Root')/GetSchema
DATA:
models=[{
  "contentTypeName": _value_
}]
```
Can only be called on the root content.
### Parameters:
- **contentTypeName** (`string`) optional: 

### Requirements:
- **AllowedRoles**: All

