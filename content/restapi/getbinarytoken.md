---
title: GetBinaryToken
metaTitle: "sensenet API - GetBinaryToken"
metaDescription: "GetBinaryToken"
---

## GetBinaryToken
- Method: **GET** or optionally POST.

Gets a token from the Content Repository that represents the binary data stored in the specified
 field (by default Binary) of the provided content version.

### Request example:
A content with a binary field.
```
GET /odata.svc/Root/...('targetContent')/GetBinaryToken?fieldName=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetBinaryToken
DATA:
models=[{
  "fieldName": _value_
}]
```
The `targetContent` can be any content type
### Parameters:
- **fieldName** (`string`) optional: Optional custom binary field name, if it is other than 'Binary'.

### Return value:
Type: `string`.

### Requirements:
- **AllowedRoles**: All

