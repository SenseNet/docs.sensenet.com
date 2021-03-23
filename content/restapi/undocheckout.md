---
title: UndoCheckOut
metaTitle: "sensenet API - UndoCheckOut"
metaDescription: "UndoCheckOut"
---

## UndoCheckOut
- Method: **POST**
- Icon: **"undocheckout"**.

Drops the last draft version of the requested content if there is. This operation is allowed only
 for the user who locked the content or an administrator with `ForceCheckin` permissions.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/UndoCheckOut
```
### Parameters:
There are no parameters.

### Return value:
The modified content. (Type: `Content`).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Save
- **RequiredPolicies**: VersioningAndApproval
- **Scenarios**: ListItem, ExploreActions, ContextMenu

