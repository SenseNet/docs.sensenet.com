---
title: Approve
metaTitle: "sensenet API - Approve"
metaDescription: "Approve"
---

## Approve
- Method: **POST**
- Icon: **"approve"**.

Approves the requested content. The content's version number will be the next major version according to
 the content's versioning mode.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/Approve
```
### Parameters:
There are no parameters.

### Return value:
The modified content. (Type: `Content`).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Save, Approve
- **RequiredPolicies**: VersioningAndApproval
- **Scenarios**: ListItem, ExploreActions, SimpleApprovableListItem, ContextMenu

