---
title: GetWopiData
metaTitle: "sensenet API - GetWopiData"
metaDescription: "GetWopiData"
---

## GetWopiData
- Method: **GET** or optionally POST.

Gets document and security information required by the WOPI protocol.

### Example

``` 
 {
     "accesstoken": "token",
     "expiration": 12345678,
     "actionUrl": "https://wopiurl",
     "faviconUrl": "https://favicon.ico"
 }
```

### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetWopiData?action=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetWopiData
DATA:
models=[{
  "action": _value_
}]
```
### Parameters:
- **action** (`string`): The required WOPI action: edit or open

### Return value:
A custom object containing WOPI-related properties. (Type: `object`).

### Requirements:
- **RequiredPermissions**: Open

