---
title: CopyExplicitEntriesOfEveryoneToVisitor
metaTitle: "sensenet API - CopyExplicitEntriesOfEveryoneToVisitor"
metaDescription: "CopyExplicitEntriesOfEveryoneToVisitor"
---

## CopyExplicitEntriesOfEveryoneToVisitor
- Method: **POST**.

Copies all explicit permission entries of the Everyone group for the Visitor user.
 The copy operation is executed on all content in the subtree of the requested content
 that are not in the _exceptList_.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/CopyExplicitEntriesOfEveryoneToVisitor
DATA:
models=[{
  "exceptList": _value_
}]
```
### Parameters:
- **exceptList** (`string[]`): White list of untouched Contents.

### Return value:
`Ok` if the operation is successfully executed. (Type: `string`).

### Requirements:
- **AllowedRoles**: Administrators, Developers

