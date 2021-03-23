---
title: FinalizeContent
metaTitle: "sensenet API - FinalizeContent"
metaDescription: "FinalizeContent"
---

## FinalizeContent
- Method: **POST**.


### Request example:

```
POST /odata.svc/Root/...('targetContent')/FinalizeContent
DATA:
models=[{
  "context": _value_
}]
```
The `targetContent` can be any content type
### Parameters:
- **context** (`HttpContext`): 

### Requirements:
- **AllowedRoles**: All
- **RequiredPermissions**: Save

