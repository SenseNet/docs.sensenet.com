---
title: RestoreVersion
metaTitle: "sensenet API - RestoreVersion"
metaDescription: "RestoreVersion"
---

## RestoreVersion
- Method: **POST**
- Icon: **"restoreversion"**.

Restores an old existing version as the last version according to the content's versioning mode.
 The old version is identified by the _version_ parameter that can be in
 one of the following forms:
 - [major].[minor] e.g. "1.2"
 - V[major].[minor] e.g. "V1.2"
 - [major].[minor].[status] e.g. "1.2.D"
 - V[major].[minor].[status] e.g. "V1.2.D"
 

Note that [status] is not required but an incorrect value causes an exception.

### Exception
- Exception: Throws if the requested content version is not found.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/RestoreVersion
DATA:
models=[{
  "version": _value_
}]
```
### Parameters:
- **version** (`string`): The old version number.

### Return value:
The modified content. (Type: `Content`).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Save, RecallOldVersion

