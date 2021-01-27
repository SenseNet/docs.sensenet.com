---
title: Content Management
metaTitle: "sensenet API - Content Management"
metaDescription: "Content Management"
---

## CopyBatch
- Method: **POST**
- Icon: **"copy"**.

Copies one or more items recursively to the given target.
 The source items can be identified by their Id or Path. Ids and paths can also be mixed.
 

Always check the allowed child types set on the chosen target container, because it can result in
 an unsuccessful copy if the target does not allow the types you want to copy.

Another limitation is that a children of a content list cannot be copied to another content list
 since there could be custom local fields on the source list that are not available on the target list and
 could cause data loss. A workaround for this (if you do not mind losing list field data) is to first copy the
 content to a temporary folder outside of the source list than move them to the target location.

 The response contains information about all copied items (subtree roots) and all errors if there is any.
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
POST /odata.svc/Root/...('targetContent')/CopyBatch
DATA:
models=[{
  "targetPath": "/Root/Target", 
  "paths": ["/Root/Content/IT/MyDocs/MyDoc1", "78945", "78946"]
}]
```
The `targetContent` can be Folder
### Parameters:
- **targetPath** (string): Path of the existing destination content.
- **paths** (object[]): 
 Array of the id or full path of source items.

### Requirements:
- **AllowedRoles**: Everyone
- **Scenarios**: GridToolbar, BatchActions

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
  "targetPath": "/Root/Target", 
  "paths": ["/Root/Content/IT/MyDocs/MyDoc1", "78945", "78946"]
}]
```
The `targetContent` can be Folder
### Parameters:
- **targetPath** (string): Path of the existing destination content.
- **paths** (object[]): 
 Array of the id or full path of the source items.

### Requirements:
- **AllowedRoles**: Everyone
- **Scenarios**: GridToolbar, BatchActions

## Delete
- Method: **POST**
- Icon: **"delete"**.

Deletes the requested content permanently or moves it to the Trash, depending on the _permanent_ parameter.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/Delete
DATA:
models=[{
  "permanent": true
}]
```
The `targetContent` can be any content type
### Parameters:
- **permanent** (bool) optional: True if the content must be deleted permanently.

### Return value:
This method returns nothing. (Type: object).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Delete
- **Scenarios**: ListItem, ContextMenu

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
- **permanent** (bool): True if the content must be deleted permanently.
- **paths** (object[]): 
 Array of the id or full path of the deletable items.

### Requirements:
- **AllowedRoles**: Everyone
- **Scenarios**: GridToolbar, BatchActions

## Restore
- Method: **POST**
- Icon: **"restore"**.

Restores the Content from the Trash.
 WARNING: Known issue that you may get errors restoring a ContentListItem whose
 ContentListField structure has changed since it was deleted.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/Restore
DATA:
models=[{
  "destination": "/Root/DifferentTarget", 
  "newname": true
}]
```
The `targetContent` can be TrashBag
### Parameters:
- **destination** (string) optional: The path where the content should be restored,
 if it is not the same one from which it was deleted.
- **newname** (bool?) optional: If true, allows renaming the restored content automatically
 if the name already exists in the destination folder.

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Save
- **Scenarios**: ListItem, ExploreToolbar, ContextMenu

