---
title: Upload
metaTitle: "sensenet API - Upload"
metaDescription: "Upload"
---

## Upload
- Method: **POST**.

Uploads a whole file or only a chunk.

### Example

``` 
 {
     "Url": "/Root/Content/myfile.docx",
     "Name": "myfile.docx",
     "Length": 1234,
     "Type": "File",
     "Id": 4567
 }
```

### Request example:

```
POST /odata.svc/Root/...('targetContent')/Upload
DATA:
models=[{
  "FileLength": _value_, 
  "ContentType": _value_, 
  "PropertyName": _value_, 
  "FileText": _value_, 
  "Overwrite": _value_, 
  "ContentId": _value_, 
  "FileName": _value_, 
  "ChunkToken": _value_, 
  "UseChunk": _value_, 
  "create": _value_
}]
```
The `targetContent` can be any content type
### Parameters:
- **FileLength** (`long?`) optional: Full length of the file.
- **ContentType** (`string`) optional: Content Type name. Default: File
- **PropertyName** (`string`) optional: Binary property name. Default: Binary
- **FileText** (`string`) optional: Text file content if applicable.
- **Overwrite** (`bool?`) optional: True if overwrite an existing file.
- **ContentId** (`int?`) optional: Id of an existing content if known.
- **FileName** (`string`) optional: Name of the uploaded file.
- **ChunkToken** (`string`) optional: Chunk token received from a previous Upload request.
- **UseChunk** (`bool?`) optional: True if the client wants to upload the file in chunks.
- **create** (`string`) optional: Any non-null value in case of the first Upload request.

### Return value:
A custom object containing basic properties of the uploaded file. (Type: `object`).

### Requirements:
- **AllowedRoles**: All
- **RequiredPermissions**: AddNew

