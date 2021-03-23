---
title: Delete
metaTitle: "sensenet API - Delete"
metaDescription: "Delete"
---

## Delete
- Method: **POST**
- Icon: **"delete"**.

Deletes the requested content permanently or moves it to the Trash, depending on the _permanent_ parameter.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/Delete
DATA:
models=[{
  "permanent": true
}]
```
The `targetContent` can be any content type
### Parameters:
- **permanent** (`bool`) optional: True if the content must be deleted permanently.

### Return value:
This method returns nothing. (Type: `object`).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Delete
- **Scenarios**: ListItem, ContextMenu

