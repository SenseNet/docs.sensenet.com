---
title: GetPreviewsFolder
metaTitle: "sensenet API - GetPreviewsFolder"
metaDescription: "GetPreviewsFolder"
---

## GetPreviewsFolder
- Method: **POST**.

Gets the id and path of the folder containing preview images
 for the specified target version of a content.
 Tha target version can be specified by the version url parameter. This
 action does not generate preview images.

### Example

``` 
 {
     Id: 1234
     Path: "/Root/Content/DocLib/MyDoc.docx/Previews/1.0.A"
 }
```

### Request example:

```
POST /odata.svc/Root/...('targetContent')/GetPreviewsFolder
DATA:
models=[{
  "empty": _value_
}]
```
The `targetContent` can be File
### Parameters:
- **empty** (`bool`): True if the preview folder should be deleted and re-created.

### Return value:
A response object containing the id and path of the folder. (Type: `GetPreviewsFolderResponse`).

### Requirements:
- **AllowedRoles**: Everyone

