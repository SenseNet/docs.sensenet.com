---
title: GetNameFromDisplayName
metaTitle: "sensenet API - GetNameFromDisplayName"
metaDescription: "GetNameFromDisplayName"
---

## GetNameFromDisplayName
- Method: **GET** or optionally POST.

OData function that converts the human readable name to the valid content name.

### Request example:
Required parameter for the OData function.
```
GET /odata.svc/('Root')/GetNameFromDisplayName?displayName=_value_
```
or
```
POST /odata.svc/('Root')/GetNameFromDisplayName
DATA:
models=[{
  "displayName": _value_
}]
```
Can only be called on the root content.
### Parameters:
- **displayName** (`string`): Source of the conversion.

### Return value:
The converted name. (Type: `string`).

### Requirements:
- **AllowedRoles**: Everyone, Visitor

