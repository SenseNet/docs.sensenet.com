---
title: GetQueries
metaTitle: "sensenet API - GetQueries"
metaDescription: "GetQueries"
---

## GetQueries
- Method: **GET** or optionally POST.

Gets saved queries accessible by the current user.
 Queries can be in the following places: either in a public folder under the
 current workspace or private queries under the profile of the current user.

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
- **onlyPublic** (`bool`) optional: True if only public queries should be returned.

### Return value:
A list of Query content items. (Type: `Content[]`).

### Requirements:
- **AllowedRoles**: Everyone

