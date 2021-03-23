---
title: RemoveAllowedChildTypes
metaTitle: "sensenet API - RemoveAllowedChildTypes"
metaDescription: "RemoveAllowedChildTypes"
---

## RemoveAllowedChildTypes
- Method: **POST**.

Removes the specified Content types from the requested content's AllowedChildTypes collection.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/RemoveAllowedChildTypes
DATA:
models=[{
  "contentTypes": _value_
}]
```
### Parameters:
- **contentTypes** (`string[]`): The items that will be removed.

### Return value:
Empty string. (Type: `string`).

### Requirements:
- **AllowedRoles**: Everyone

