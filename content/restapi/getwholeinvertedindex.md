---
title: GetWholeInvertedIndex
metaTitle: "sensenet API - GetWholeInvertedIndex"
metaDescription: "GetWholeInvertedIndex"
---

## GetWholeInvertedIndex
- Method: **GET** or optionally POST.

Shows the whole inverted index in a raw format with some transformations for easier readability.
 WARNING! The index may contain sensitive information.
 

 Note that some index providers do not support this feature because of the size of the index.
 

 The response does not appear all at once because it is generated using a streaming technique.
 This may affect browser add-ons (e.g. json validator or formatter, etc.).
 

 An annotated example:
 ``` 
 {
   "ActionTypeName": {          // level-1: field
     "clientaction":            // level-2: term
         "0 1 2 3 7 12 19 ..."  // level-3: sorted documentId list as a single string
   },
   /* ... */
   "Description": {
     /* ... */
     "browser": "147",
     "calendarevent": "132",
     "can": "143 144 147 148 151 152",
     "case": "143",
     /* ... */
```

### Request example:

```
GET /odata.svc/('Root')/GetWholeInvertedIndex
```
Can only be called on the root content.
### Parameters:
There are no parameters.

### Return value:
The whole raw index.

### Requirements:
- **AllowedRoles**: Administrators, Developers

