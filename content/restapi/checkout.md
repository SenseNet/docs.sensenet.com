---
title: CheckOut
metaTitle: "sensenet API - CheckOut"
metaDescription: "CheckOut"
---

## CheckOut
- Method: **POST**
- Icon: **"checkout"**.

Creates a new version of the requested content and locks it exclusively for the current user.
 The version number is changed according to the content's versioning mode.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/CheckOut
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

