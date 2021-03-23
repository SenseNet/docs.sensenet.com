---
title: CheckIn
metaTitle: "sensenet API - CheckIn"
metaDescription: "CheckIn"
---

## CheckIn
- Method: **POST**
- Icon: **"checkin"**.

Removes the exclusive lock from the requested content and persists the _checkInComments_
 if there is. The version number is changed according to the content's versioning mode.
 

### Exception
- Exception: An exception will be thrown if the _checkInComments_ is
 missing and the value of the requested content's `CheckInCommentsMode` is `Compulsory`.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/CheckIn
DATA:
models=[{
  "checkInComments": Very good.
}]
```
### Parameters:
- **checkInComments** (`string`) optional: The modifier's comments.

### Return value:
The modified content. (Type: `Content`).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Save
- **RequiredPolicies**: VersioningAndApproval
- **Scenarios**: ListItem, ExploreActions, SimpleApprovableListItem, ContextMenu

