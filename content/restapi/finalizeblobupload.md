---
title: FinalizeBlobUpload
metaTitle: "sensenet API - FinalizeBlobUpload"
metaDescription: "FinalizeBlobUpload"
---

## FinalizeBlobUpload
- Method: **POST**.

Finishes a blob write operation by calling CommitChunk and finalizing the content.
 This method is used by clients who intend to use the blob storage client
 to write files directly to the blob storage.

### Request example:
A content in a multistep saving state.
```
POST /odata.svc/Root/...('targetContent')/FinalizeBlobUpload
DATA:
models=[{
  "token": _value_, 
  "fullSize": _value_, 
  "fieldName": _value_, 
  "fileName": _value_
}]
```
The `targetContent` can be any content type
### Parameters:
- **token** (`string`): Binary token provided by the start operation before.
- **fullSize** (`long`): Size of the whole binary.
- **fieldName** (`string`) optional: Optional custom binary field name, if it is other than 'Binary'.
- **fileName** (`string`) optional: Binary file name to save into the binary metadata.

### Return value:
Type: `string`.

### Requirements:
- **AllowedRoles**: All
- **RequiredPermissions**: Save

