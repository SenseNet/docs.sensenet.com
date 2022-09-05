---
title: StartBlobUpload
metaTitle: "sensenet API - StartBlobUpload"
metaDescription: "StartBlobUpload"
---

## StartBlobUpload
- Method: **POST**.

Starts a blob write operation by putting the content into a multistep saving state
 and calling StartChunk. This method is used by clients who intend to use the blob
 storage client to write files directly to the blob storage.

### Request example:
Existing content with a binary field to upload to. In most cases this is a file content.
```
POST /odata.svc/Root/...('targetContent')/StartBlobUpload
DATA:
models=[{
  "fullSize": _value_, 
  "fieldName": _value_
}]
```
The `targetContent` can be any content type
### Parameters:
- **fullSize** (`long`): Size of the whole binary.
- **fieldName** (`string`) optional: Optional custom binary field name, if it is other than 'Binary'.

### Return value:
Chunk write token, content id and version id in a JSON object. (Type: `string`).

### Requirements:
- **AllowedRoles**: All
- **RequiredPermissions**: Save

