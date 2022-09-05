---
title: CheckIndexIntegrity
metaTitle: "sensenet API - CheckIndexIntegrity"
metaDescription: "CheckIndexIntegrity"
---

## CheckIndexIntegrity
- Method: **GET** or optionally POST.

DEPRECATED. Checking index integrity online is not supported anymore. Use an offline solution instead.
 

### Exception
- SnNotSupportedException:

### Request example:

```
GET /odata.svc/Root/...('targetContent')/CheckIndexIntegrity?recurse=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/CheckIndexIntegrity
DATA:
models=[{
  "recurse": _value_
}]
```
### Parameters:
- **recurse** (`bool`): Irrelevant because throws SnNotSupportedException.

### Return value:
Throws SnNotSupportedException. (Type: `object`).


