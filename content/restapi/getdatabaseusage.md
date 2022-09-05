---
title: GetDatabaseUsage
metaTitle: "sensenet API - GetDatabaseUsage"
metaDescription: "GetDatabaseUsage"
---

## GetDatabaseUsage
- Method: **GET** or optionally POST.

Gets database usage information about the repository.

### Request example:

```
GET /odata.svc/('Root')/GetDatabaseUsage?force=_value_
```
or
```
POST /odata.svc/('Root')/GetDatabaseUsage
DATA:
models=[{
  "force": _value_
}]
```
Can only be called on the root content.
### Parameters:
- **force** (`bool`) optional: True if the data should be refreshed from the database. Default: false

### Return value:
A _DatabaseUsage_ object containing content, preview, binary
 and version count information. (Type: `DatabaseUsage`).

### Requirements:
- **AllowedRoles**: Administrators, Developers

