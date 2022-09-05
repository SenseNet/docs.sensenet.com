---
title: OpenTree
metaTitle: "sensenet API - OpenTree"
metaDescription: "OpenTree"
---

## OpenTree
- Method: **GET** or optionally POST.

Gets a list of ancestor content items of the target content. The list will also contain child elements along
 the way so that a subtree can be built from the list.
 

### Exceptions
- ODataException: 
- ContentNotFoundException:

### Request example:

```
GET /odata.svc/Root/...('targetContent')/OpenTree?rootPath=_value_&withLeaves=_value_&withSystem=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/OpenTree
DATA:
models=[{
  "rootPath": _value_, 
  "withLeaves": _value_, 
  "withSystem": _value_
}]
```
The `targetContent` can be any content type
### Parameters:
- **rootPath** (`string`): A root ancestor content. This is where the ancestor list will start.
- **withLeaves** (`bool`) optional: Whether the response should contain child elements that are not folders (default: false).
- **withSystem** (`bool`) optional: Whether the response should contain system content (default: false).

### Return value:
A list of parent and child content items between the provided root and the target content. (Type: `object`).

### Requirements:
- **AllowedRoles**: Everyone

