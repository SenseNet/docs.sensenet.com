---
title: FinalizeContent
metaTitle: "sensenet API - FinalizeContent"
metaDescription: "FinalizeContent"
---

## FinalizeContent
- Method: **POST**.

Finalizes a multi step upload operation and
 makes the content available for modifications.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/FinalizeContent
```
The `targetContent` can be any content type
### Parameters:
There are no parameters.

### Return value:
An empty result. (Type: `string`).

### Requirements:
- **AllowedRoles**: All
- **RequiredPermissions**: Save

