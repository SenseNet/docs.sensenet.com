---
title: RemoveSharing
metaTitle: "sensenet API - RemoveSharing"
metaDescription: "RemoveSharing"
---

## RemoveSharing
- Method: **POST**.

Remove a sharing record from a content.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/RemoveSharing
DATA:
models=[{
  "id": _value_
}]
```
### Parameters:
- **id** (`string`): Identifier of a sharing record.

### Return value:
Returns true if the system has found and removed the sharing record. (Type: `object`).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Save, SetPermissions

