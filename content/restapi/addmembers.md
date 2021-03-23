---
title: AddMembers
metaTitle: "sensenet API - AddMembers"
metaDescription: "AddMembers"
---

## AddMembers
- Method: **POST**.

Adds the specified items to the members list of the given group _Content_.
 If the content is not a _Group_, an _InvalidOperationException_ will be thrown.

### Request example:
A _Content_ that should be a _Group_.
```
POST /odata.svc/Root/...('targetContent')/AddMembers
DATA:
models=[{
  "contentIds": _value_
}]
```
The `targetContent` can be Group
### Parameters:
- **contentIds** (`int[]`): An array of contentIds that represents the new members.

### Requirements:
- **AllowedRoles**: Everyone

