---
title: ForceUndoCheckOut
metaTitle: "sensenet API - ForceUndoCheckOut"
metaDescription: "ForceUndoCheckOut"
---

## ForceUndoCheckOut
- Method: **POST**
- Icon: **"undocheckout"**.

Drops the last draft version of the requested content if there is. This operation is allowed only
 for users who have `ForceCheckin` permission on this content.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/ForceUndoCheckOut
```
### Parameters:
There are no parameters.

### Return value:
The modified content. (Type: `Content`).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Save, ForceCheckin
- **RequiredPolicies**: VersioningAndApproval
- **Scenarios**: ListItem, ExploreActions, ContextMenu

