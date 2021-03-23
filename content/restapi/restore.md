---
title: Restore
metaTitle: "sensenet API - Restore"
metaDescription: "Restore"
---

## Restore
- Method: **POST**
- Icon: **"restore"**.

Restores the Content from the Trash.
 WARNING: Known issue that you may get errors restoring a ContentListItem whose
 ContentListField structure has changed since it was deleted.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/Restore
DATA:
models=[{
  "destination": /Root/DifferentTarget, 
  "newname": true
}]
```
The `targetContent` can be TrashBag
### Parameters:
- **destination** (`string`) optional: The path where the content should be restored,
 if it is not the same one from which it was deleted.
- **newname** (`bool?`) optional: If true, allows renaming the restored content automatically
 if the name already exists in the destination folder.

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Save
- **Scenarios**: ListItem, ExploreToolbar, ContextMenu

