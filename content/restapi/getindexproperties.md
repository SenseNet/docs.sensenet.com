---
title: GetIndexProperties
metaTitle: "sensenet API - GetIndexProperties"
metaDescription: "GetIndexProperties"
---

## GetIndexProperties
- Method: **GET** or optionally POST.

Gets summary information about the index.
 Contains the activity status, field info and a versionId list.
 Useful in debugging scenarios.
 

 A shortened example:
 ``` 
 {
   "IndexingActivityStatus": {
     "LastActivityId": 194,
     "Gaps": []
     },
   "FieldInfo": {
     "_Text": 948,
     "ActionTypeName": 1,
     /*....*/
     "Width": 8,
     "Workspace": 11,
     "WorkspaceSkin": 1
   },
   "VersionIds": [ 1, 2, /*....*/ 157, 158, 163 ]
}
```

The properties are:
 - IndexingActivityStatus: information about the progress of the indexing process (local index only).
 - FieldInfo: sorted list of indexed fields. Every item is a key-value pair with the field name and the count of terms.
 - VersionIds: sorted list of all indexed versionIds. Note that the versionId is the primary key of index documents.

### Request example:

```
GET /odata.svc/('Root')/GetIndexProperties
```
Can only be called on the root content.
### Parameters:
There are no parameters.

### Return value:
Type: `IndexProperties`.

### Requirements:
- **AllowedRoles**: Administrators, Developers

