---
title: RebuildIndex
metaTitle: "sensenet API - RebuildIndex"
metaDescription: "RebuildIndex"
---

## RebuildIndex
- Method: **POST**.

Rebuilds the index document of a content and optionally of all documents in the whole subtree.
 In case the value of _rebuildLevel_ is _IndexOnly_ the index document is refreshed
 based on the already existing extracted data stored in the database. This is a significantly faster method
 and it is designed for cases when only the place of the content in the tree has changed or the index got corrupted.
 The _DatabaseAndIndex_ algorithm will reindex the full content than update the index in the
 external index provider the same way as the light-weight algorithm.

### Request example:
The content provided by the infrastructure.
```
POST /odata.svc/Root/...('targetContent')/RebuildIndex
DATA:
models=[{
  "recursive": _value_, 
  "rebuildLevel": _value_
}]
```
The `targetContent` can be any content type
### Parameters:
- **recursive** (`bool`): Whether child content should be reindexed or not. Default: false.
- **rebuildLevel** (`IndexRebuildLevel`): The algorithm selector. Value can be _IndexOnly_ or _DatabaseAndIndex_. Default: _IndexOnly_

### Requirements:
- **AllowedRoles**: Administrators, Developers
- **RequiredPermissions**: Save

