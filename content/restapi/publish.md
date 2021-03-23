---
title: Publish
metaTitle: "sensenet API - Publish"
metaDescription: "Publish"
---

## Publish
- Method: **POST**
- Icon: **"publish"**.

Publishes the requested content. The version number is changed to the next major version
 according to the content's versioning mode.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/Publish
```
### Parameters:
There are no parameters.

### Return value:
The modified content. (Type: `Content`).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Save, Publish
- **RequiredPolicies**: VersioningAndApproval
- **Scenarios**: ListItem, ExploreActions, SimpleApprovableListItem, ContextMenu

