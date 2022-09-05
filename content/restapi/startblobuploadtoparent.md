---
title: StartBlobUploadToParent
metaTitle: "sensenet API - StartBlobUploadToParent"
metaDescription: "StartBlobUploadToParent"
---

## StartBlobUploadToParent
- Method: **POST**.

Starts a blob write operation by loading an existing content (determined by the
 requested parent resource and the provided file name) or creating a new one.
 It puts the content into a multistep saving state and calls StartChunk.
 This method is used by clients who intend to use the blob storage client
 to write files directly to the blob storage.

### Request example:
Parent content to upload the new file to.
```
POST /odata.svc/Root/...('targetContent')/StartBlobUploadToParent
DATA:
models=[{
  "name": _value_, 
  "contentType": _value_, 
  "fullSize": _value_, 
  "fieldName": _value_
}]
```
The `targetContent` can be any content type
### Parameters:
- **name** (`string`): Name of the new (or existing) content.
- **contentType** (`string`): Content type of the new content.
- **fullSize** (`long`): Size of the whole binary.
- **fieldName** (`string`) optional: Optional custom binary field name, if it is other than 'Binary'.

### Return value:
Chunk write token, content id and version id in a JSON object. (Type: `string`).

### Requirements:
- **AllowedRoles**: All
- **RequiredPermissions**: AddNew

