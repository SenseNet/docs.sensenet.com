---
title: GetIndexDocument
metaTitle: "sensenet API - GetIndexDocument"
metaDescription: "GetIndexDocument"
---

## GetIndexDocument
- Method: **GET** or optionally POST.

Gets the index document (not-inverted index) of the current version of the requested resource.
 WARNING! The index may contain sensitive information.
 

 The version of the requested resource depends on the logged in user's permissions but can be tailored by the
 general parameter "version".
 This parameter format is ((['V'|'v'])?[majornumber][.][minornumber]([.] [*]+)?)|'lastmajor'|'lastminor'
 Valid examples: V1.0, 2.3, v12.3456, lastmajor, lastminor
 Note that the logged-in user needs enough permission for the requested version that can be
 Open, OpenMinor, RecallOldVersions.
 

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
GET /odata.svc/Root/...('targetContent')/GetIndexDocument?versionId=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetIndexDocument
DATA:
models=[{
  "versionId": _value_
}]
```
The `targetContent` can be any content type
### Parameters:
- **versionId** (`int`) optional: Optional versionId if it is different from the versionId of the requested resource.

### Return value:
Type: `IDictionary<string, object>`.

### Requirements:
- **AllowedRoles**: Administrators, Developers

