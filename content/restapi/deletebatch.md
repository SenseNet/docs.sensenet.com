---
title: DeleteBatch
metaTitle: "sensenet API - DeleteBatch"
metaDescription: "DeleteBatch"
---

## DeleteBatch
- Method: **POST**
- Icon: **"delete"**.

Deletes one or more content permanently or moves them to the Trash, depending on the _permanent_ parameter.
 The deletable items can be identified by their Id or Path. Ids and paths can also be mixed.
 

 The response contains information about all deleted items (subtree roots) and all errors if there is any.
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
POST /odata.svc/Root/...('targetContent')/DeleteBatch
DATA:
models=[{
  "permanent": false, 
  "paths": ["/Root/Content/IT/MyDocs/MyDoc1", "78945", "78946"]
}]
```
The `targetContent` can be Folder
### Parameters:
- **permanent** (`bool`): True if the content must be deleted permanently.
- **paths** (`object[]`): 
 Array of the id or full path of the deletable items.

### Requirements:
- **AllowedRoles**: Everyone
- **Scenarios**: GridToolbar, BatchActions

