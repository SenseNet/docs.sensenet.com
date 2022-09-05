---
title: GetIndexDocumentByDocumentId
metaTitle: "sensenet API - GetIndexDocumentByDocumentId"
metaDescription: "GetIndexDocumentByDocumentId"
---

## GetIndexDocumentByDocumentId
- Method: **GET** or optionally POST.

Gets the index document (not-inverted index) of the requested documentId.
 WARNING! The index may contain sensitive information.
 

 The documentId depends on the index provider and comes from the inverted index
 (see the _GetInvertedIndex_ function).
 The response contains key-value pairs where the key is the field name and the value is a list of ordered term values.
 A shortened example:
 ``` 
 {
   /* ... */
   "CreatedBy": "12",
   "CreatedById": "12",
   "CreationDate": "2022-07-20 05:59",
   "Depth": "3",
   "Description": "behavior, can, case, customize, different, example, extractor, file, indexing, settings, system, text, types, used, you",
   "DisplayName": "indexing.settings",
   "EnableLifespan": "no",
   /* ... */
```

 Note that the original text cannot be reproduced from the term values in some cases.

### Request example:

```
GET /odata.svc/('Root')/GetIndexDocumentByDocumentId?documentId=_value_
```
or
```
POST /odata.svc/('Root')/GetIndexDocumentByDocumentId
DATA:
models=[{
  "documentId": _value_
}]
```
Can only be called on the root content.
### Parameters:
- **documentId** (`int`): The documentId from the inverted index.

### Return value:
Type: `IDictionary<string, object>`.

### Requirements:
- **AllowedRoles**: Administrators, Developers

