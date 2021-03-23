---
title: Reject
metaTitle: "sensenet API - Reject"
metaDescription: "Reject"
---

## Reject
- Method: **POST**.

Rejects the modifications of the requested content and persists the _rejectReason_
 if there is.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/Reject
DATA:
models=[{
  "rejectReason": Rewrite please.
}]
```
### Parameters:
- **rejectReason** (`string`) optional: The reviewer's comments.

### Return value:
The modified content. (Type: `Content`).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Save
- **RequiredPolicies**: VersioningAndApproval

