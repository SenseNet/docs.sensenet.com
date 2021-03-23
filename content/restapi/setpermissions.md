---
title: SetPermissions
metaTitle: "sensenet API - SetPermissions"
metaDescription: "SetPermissions"
---

## SetPermissions
- Method: **POST**
- Icon: **"security"**.

Changes the permission inheritance on the requested content.
 

 After the `break` operation, all previous
 effective permissions that match any of the given entry types will be copied to the content.
 After the `unbreak` operation, the unnecessary explicit entries will be removed.
 The method is ineffective if the content's inheritance state matches the requested operation
 (`break` operation on broken inheritance or `unbreak` operation on not broken inheritance).

### Exception
- ArgumentException: Throws _ArgumentException_ if the _inheritance_ is
 invalid.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/SetPermissions
DATA:
models=[{
  "inheritance": _value_
}]
```
The `targetContent` can be any content type
### Parameters:
- **inheritance** (`string`): The inheritance value as string. Available values: "break" or "unbreak"

### Return value:
The requested resource. (Type: `Content`).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Open, SeePermissions, SetPermissions
- **Scenarios**: WorkspaceActions, ListItem, ExploreActions, ContextMenu

