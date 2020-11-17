---
title: Content and Schema
metaTitle: "sensenet API - Content and Schema"
metaDescription: "Content and Schema"
---

## GetNameFromDisplayName
- Method: **GET** or optionally POST.

OData function that converts the human readable name to the valid content name.

### Request example:
Required parameter for the OData function.
```
GET /odata.svc/('Root')/GetNameFromDisplayName?displayName=_value_
```
or
```
POST /odata.svc/('Root')/GetNameFromDisplayName
DATA:
models=[{
  "displayName": "_value_"
}]
```
Can only be called on the root content.
### Parameters:
- **displayName** (string): Source of the conversion.

### Return value:
The converted name. (Type: string).

### Requirements:
- **AllowedRoles**: Everyone, Visitor

## GetSchema
- Method: **GET** or optionally POST.


### Request example:

```
GET /odata.svc/('Root')/GetSchema?contentTypeName=_value_
```
or
```
POST /odata.svc/('Root')/GetSchema
DATA:
models=[{
  "contentTypeName": "_value_"
}]
```
Can only be called on the root content.
### Parameters:
- **contentTypeName** (string) optional: 

### Requirements:
- **AllowedRoles**: All

## GetMetadata
- Method: **GET** or optionally POST.

Generic OData action method for collecting all fields of all types in the system.

### Request example:
Compulsory generic OData action parameter, currently not used.
```
GET /odata.svc/Root/...('targetContent')/GetMetadata
```
### Parameters:
There are no parameters.

### Return value:
Two arrays: one with regular fields and one for aspect fields. (Type: string).

### Requirements:
- **AllowedRoles**: Everyone

