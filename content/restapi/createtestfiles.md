---
title: CreateTestFiles
metaTitle: "sensenet API - CreateTestFiles"
metaDescription: "CreateTestFiles"
---

## CreateTestFiles
- Method: **GET** or optionally POST.


### Request example:

```
GET /odata.svc/('Root')/CreateTestFiles?count=_value_&size=_value_
```
or
```
POST /odata.svc/('Root')/CreateTestFiles
DATA:
models=[{
  "count": _value_, 
  "size": _value_
}]
```
Can only be called on the root content.
### Parameters:
- **count** (`int`): 
- **size** (`long`): 

### Requirements:
- **AllowedRoles**: Administrators
- **RequiredPermissions**: Save

