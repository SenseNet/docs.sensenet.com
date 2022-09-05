---
title: Import
metaTitle: "sensenet API - Import"
metaDescription: "Import"
---

## Import
- Method: **GET** or optionally POST.

Imports a content to the content repository. This action is able to import both new and
 existing content items.
 

 An example request for importing a new content:
 ``` 
 {
    "path": "/Root/ParentPath",
    "data": {
       "ContentType" = "Article",
       "ContentName" = "MyNewContent",
       "Fields" = {},
       "Permissions" = {}
    }
 }
```

 An example response:
 ``` 
 {
    "path": "/Root/ParentPath",
    "name": "MyNewContent",
    "type": "Article",
    "action": "created",
    "brokenReferences": [],
    "retryPermissions": false,
    "messages": []
 }
```

### Request example:

```
GET /odata.svc/('Root')/Import?path=_value_&data=_value_
```
or
```
POST /odata.svc/('Root')/Import
DATA:
models=[{
  "path": _value_, 
  "data": _value_
}]
```
Can only be called on the root content.
### Parameters:
- **path** (`string`): Target path. In case of a new content this is the path of the parent. In case of
 existing content this is the path of the content itself.
- **data** (`object`): Content metadata (name, type, fields).

### Return value:
A result object containing basic metadata of the created or modified content, the action that happened
 and the postponed references or permission settings. (Type: `object`).

### Requirements:
- **AllowedRoles**: Administrators, Developers

