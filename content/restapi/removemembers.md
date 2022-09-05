---
title: RemoveMembers
metaTitle: "sensenet API - RemoveMembers"
metaDescription: "RemoveMembers"
---

## RemoveMembers
- Method: **POST**.

Removes the specified items from the members list of the given group _Content_.

### Request example:
A _Content_ that should be a _Group_.
```
POST /odata.svc/Root/...('targetContent')/RemoveMembers
DATA:
models=[{
  "contentIds": _value_
}]
```
The `targetContent` can be Group
### Parameters:
- **contentIds** (`int[]`): An array of contentIds that represents the members to remove.

### Return value:
Type: `object`.

### Requirements:
- **AllowedRoles**: Everyone

