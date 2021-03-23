---
title: RefreshIndexSubtree
metaTitle: "sensenet API - RefreshIndexSubtree"
metaDescription: "RefreshIndexSubtree"
---

## RefreshIndexSubtree
- Method: **POST**.

Refreshes the index document of the content and the whole subtree using the already existing index data stored in the database.

### Request example:
The content provided by the infrastructure.
```
POST /odata.svc/Root/...('targetContent')/RefreshIndexSubtree
```
The `targetContent` can be any content type
### Parameters:
There are no parameters.

### Requirements:
- **AllowedRoles**: Administrators, Developers

