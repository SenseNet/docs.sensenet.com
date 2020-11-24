---
title: Preview
metaTitle: "sensenet API - Preview"
metaDescription: "Preview"
---

## GetPreviewImages
- Method: **GET** or optionally POST.


### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetPreviewImages
```
The `targetContent` can be File
### Parameters:
There are no parameters.

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Preview

## PreviewAvailable
- Method: **GET** or optionally POST.


### Request example:

```
GET /odata.svc/Root/...('targetContent')/PreviewAvailable?page=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/PreviewAvailable
DATA:
models=[{
  "page": _value_
}]
```
The `targetContent` can be File
### Parameters:
- **page** (int): 

### Requirements:
- **AllowedRoles**: Everyone

## GetExistingPreviewImages
- Method: **GET** or optionally POST.


### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetExistingPreviewImages
```
The `targetContent` can be File
### Parameters:
There are no parameters.

### Requirements:
- **AllowedRoles**: Everyone

## GetPageCount
- Method: **POST**.


### Request example:

```
POST /odata.svc/Root/...('targetContent')/GetPageCount
```
The `targetContent` can be File
### Parameters:
There are no parameters.

### Requirements:
- **AllowedRoles**: Everyone

## GetPreviewsFolder
- Method: **POST**.


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
- **empty** (bool): 

### Requirements:
- **AllowedRoles**: Everyone

## SetPreviewStatus
- Method: **POST**.


### Request example:

```
POST /odata.svc/Root/...('targetContent')/SetPreviewStatus
DATA:
models=[{
  "status": _value_
}]
```
The `targetContent` can be File
### Parameters:
- **status** (PreviewStatus): 

### Requirements:
- **AllowedRoles**: Everyone

## SetPageCount
- Method: **POST**.


### Request example:

```
POST /odata.svc/Root/...('targetContent')/SetPageCount
DATA:
models=[{
  "pageCount": _value_
}]
```
The `targetContent` can be File
### Parameters:
- **pageCount** (int): 

### Requirements:
- **AllowedRoles**: Everyone

## SetInitialPreviewProperties
- Method: **POST**.


### Request example:

```
POST /odata.svc/Root/...('targetContent')/SetInitialPreviewProperties
```
The `targetContent` can be PreviewImage
### Parameters:
There are no parameters.

### Requirements:
- **AllowedRoles**: Everyone

## RegeneratePreviews
- Method: **POST**.


### Request example:

```
POST /odata.svc/Root/...('targetContent')/RegeneratePreviews
```
The `targetContent` can be File
### Parameters:
There are no parameters.

### Requirements:
- **AllowedRoles**: Everyone

## CheckPreviews
- Method: **POST**.


### Request example:

```
POST /odata.svc/Root/...('targetContent')/CheckPreviews
DATA:
models=[{
  "generateMissing": _value_
}]
```
The `targetContent` can be File
### Parameters:
- **generateMissing** (bool): 

### Requirements:
- **AllowedRoles**: Everyone

## DocumentPreviewFinalizer
- Method: **POST**.


### Request example:

```
POST /odata.svc/Root/...('targetContent')/DocumentPreviewFinalizer
DATA:
models=[{
  "result": _value_
}]
```
### Parameters:
- **result** (SnTaskResult): 

### Requirements:
- **AllowedRoles**: Everyone

