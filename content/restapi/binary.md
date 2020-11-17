---
title: Binary
metaTitle: "sensenet API - Binary"
metaDescription: "Binary"
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
  "ContentType": "_value_", 
  "PropertyName": "_value_", 
  "FileText": "_value_", 
  "Overwrite": _value_, 
  "ContentId": _value_, 
  "FileName": "_value_", 
  "ChunkToken": "_value_", 
  "UseChunk": _value_, 
  "create": "_value_"
}]
```
The `targetContent` can be any content type
### Parameters:
- **context** (HttpContext): 
- **FileLength** (long?) optional: 
- **ContentType** (string) optional: 
- **PropertyName** (string) optional: 
- **FileText** (string) optional: 
- **Overwrite** (bool?) optional: 
- **ContentId** (int?) optional: 
- **FileName** (string) optional: 
- **ChunkToken** (string) optional: 
- **UseChunk** (bool?) optional: 
- **create** (string) optional: 

### Requirements:
- **AllowedRoles**: All
- **RequiredPermissions**: AddNew

## FinalizeContent
- Method: **POST**.


### Request example:

```
POST /odata.svc/Root/...('targetContent')/FinalizeContent
DATA:
models=[{
  "context": _value_
}]
```
The `targetContent` can be any content type
### Parameters:
- **context** (HttpContext): 

### Requirements:
- **AllowedRoles**: All
- **RequiredPermissions**: Save

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
  "context": _value_, 
  "name": "_value_", 
  "contentType": "_value_", 
  "fullSize": _value_, 
  "fieldName": "_value_"
}]
```
The `targetContent` can be any content type
### Parameters:
- **context** (HttpContext): The current HttpContext if available.
- **name** (string): Name of the new (or existing) content.
- **contentType** (string): Content type of the new content.
- **fullSize** (long): Size of the whole binary.
- **fieldName** (string) optional: Optional custom binary field name, if it is other than 'Binary'.

### Return value:
Chunk write token, content id and version id in a JSON object. (Type: Task&lt;string>).

### Requirements:
- **AllowedRoles**: All
- **RequiredPermissions**: AddNew

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
  "context": _value_, 
  "fullSize": _value_, 
  "fieldName": "_value_"
}]
```
The `targetContent` can be any content type
### Parameters:
- **context** (HttpContext): The current HttpContext if available.
- **fullSize** (long): Size of the whole binary.
- **fieldName** (string) optional: Optional custom binary field name, if it is other than 'Binary'.

### Return value:
Chunk write token, content id and version id in a JSON object. (Type: string).

### Requirements:
- **AllowedRoles**: All
- **RequiredPermissions**: Save

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
  "context": _value_, 
  "token": "_value_", 
  "fullSize": _value_, 
  "fieldName": "_value_", 
  "fileName": "_value_"
}]
```
The `targetContent` can be any content type
### Parameters:
- **context** (HttpContext): The current HttpContext if available.
- **token** (string): Binary token provided by the start operation before.
- **fullSize** (long): Size of the whole binary.
- **fieldName** (string) optional: Optional custom binary field name, if it is other than 'Binary'.
- **fileName** (string) optional: Binary file name to save into the binary metadata.

### Requirements:
- **AllowedRoles**: All
- **RequiredPermissions**: Save

## GetBinaryToken
- Method: **GET** or optionally POST.

Gets a token from the Content Repository that represents the binary data stored in the specified
 field (by default Binary) of the provided content version.

### Request example:
A content with a binary field.
```
GET /odata.svc/Root/...('targetContent')/GetBinaryToken?context=_value_&fieldName=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetBinaryToken
DATA:
models=[{
  "context": _value_, 
  "fieldName": "_value_"
}]
```
The `targetContent` can be any content type
### Parameters:
- **context** (HttpContext): The current HttpContext if available.
- **fieldName** (string) optional: Optional custom binary field name, if it is other than 'Binary'.

### Requirements:
- **AllowedRoles**: All

