---
title: RebuildIndexSubtree
metaTitle: "sensenet API - RebuildIndexSubtree"
metaDescription: "RebuildIndexSubtree"
---

## RebuildIndexSubtree
- Method: **POST**.

Performs a full reindex operation on the content and the whole subtree.

### Request example:
The content provided by the infrastructure.
```
POST /odata.svc/Root/...('targetContent')/RebuildIndexSubtree
```
The `targetContent` can be any content type
### Parameters:
There are no parameters.

### Requirements:
- **AllowedRoles**: Administrators, Developers

