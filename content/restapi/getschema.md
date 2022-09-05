---
title: GetSchema
metaTitle: "sensenet API - GetSchema"
metaDescription: "GetSchema"
---

## GetSchema
- Method: **GET** or optionally POST.

Gets type and field information for a single content type or all of them.

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
- **contentTypeName** (`string`) optional: Optional content type name.

### Return value:
A list of type objects containing content type head information
 (name, parent, etc.) and field settings. (Type: `object`).

### Requirements:
- **AllowedRoles**: All

