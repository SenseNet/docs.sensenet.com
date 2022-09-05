---
title: MoveBatch
metaTitle: "sensenet API - MoveBatch"
metaDescription: "MoveBatch"
---

## MoveBatch
- Method: **POST**
- Icon: **"move"**.

Moves one or more items recursively to the given target.
 The source items can be identified by their Id or Path. Ids and paths can also be mixed.
 

Always check the allowed child types set on the chosen target container, because it can result in
 an unsuccessful move if the target does not allow the types you want to move.

Another limitation is that a children of a content list cannot be moved to another content list
 since there could be custom local fields on the source list that are not available on the target list and
 could cause data loss. A workaround for this (if you do not mind losing list field data) is to first move the
 content to a temporary folder outside of the source list than move them to the target location.

 The response contains information about all moved items (subtree roots) and all errors if there is any.
 ``` 
 {
   "d": {
     "__count": 3,
     "results": [
       {
         "Id": 78944,
         "Path": "/Root/Target/MyDoc1.docx",
         "Name": "MyDoc1.docx"
       }
       {
         "Id": 78945,
         "Path": "/Root/Target/MyDoc2.docx",
         "Name": "MyDoc2.docx"
       },
       {
         "Id": 78946,
         "Path": "/Root/Target/MyDoc3.docx",
         "Name": "MyDoc3.docx"
       }
     ],
     "errors": []
   }
 }
```

### Request example:
The requested resource is irrelevant in this case.
```
POST /odata.svc/Root/...('targetContent')/MoveBatch
DATA:
models=[{
  "targetPath": /Root/Target, 
  "paths": ["/Root/Content/IT/MyDocs/MyDoc1", "78945", "78946"]
}]
```
The `targetContent` can be Folder
### Parameters:
- **targetPath** (`string`): Path of the existing destination content.
- **paths** (`object[]`): 
 Array of the id or full path of the source items.

### Return value:
Type: `BatchActionResponse`.

### Requirements:
- **AllowedRoles**: Everyone
- **Scenarios**: GridToolbar, BatchActions

