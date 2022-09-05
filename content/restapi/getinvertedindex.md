---
title: GetInvertedIndex
metaTitle: "sensenet API - GetInvertedIndex"
metaDescription: "GetInvertedIndex"
---

## GetInvertedIndex
- Method: **GET** or optionally POST.

Shows the inverted index of the requested field in a raw format with some transformations for easier readability.
 WARNING! The index may contain sensitive information.
 

 A shortened example where the fieldName is "Description":
 ``` 
 {
   /* ... */
   "browser": "147",
   "calendarevent": "132",
   "can": "143 144 147 148 151 152",
   "case": "143",
   /* ... */
```

### Request example:

```
GET /odata.svc/('Root')/GetInvertedIndex?fieldName=_value_
```
or
```
POST /odata.svc/('Root')/GetInvertedIndex
DATA:
models=[{
  "fieldName": _value_
}]
```
Can only be called on the root content.
### Parameters:
- **fieldName** (`string`): The field name that identifies the requested sub-index.

### Return value:
Key-value pairs of the term and a sorted documentId list. (Type: `IDictionary<string, object`).

### Requirements:
- **AllowedRoles**: Administrators, Developers

