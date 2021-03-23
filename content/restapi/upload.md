---
title: Upload
metaTitle: "sensenet API - Upload"
metaDescription: "Upload"
---

## Upload
- Method: **POST**.


### Request example:

```
POST /odata.svc/Root/...('targetContent')/Upload
DATA:
models=[{
  "context": _value_, 
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
- **context** (`HttpContext`): 
- **FileLength** (`long?`) optional: 
- **ContentType** (`string`) optional: 
- **PropertyName** (`string`) optional: 
- **FileText** (`string`) optional: 
- **Overwrite** (`bool?`) optional: 
- **ContentId** (`int?`) optional: 
- **FileName** (`string`) optional: 
- **ChunkToken** (`string`) optional: 
- **UseChunk** (`bool?`) optional: 
- **create** (`string`) optional: 

### Requirements:
- **AllowedRoles**: All
- **RequiredPermissions**: AddNew

