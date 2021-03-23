---
title: GetAcl
metaTitle: "sensenet API - GetAcl"
metaDescription: "GetAcl"
---

## GetAcl
- Method: **GET** or optionally POST.

Returns the access control list for the requested content.

 The returned object contains information about the permission inheritance state of the content, and
 all related permissions.
 

### Example

 Here is an abbreviated and annotated return value example:
 ``` 
 {
   "id": 1347,                                 // Id of the requested content
   "path": "/Root/Content",                    // Path of the requested content
   "inherits": true,                           // Permission inheritance state
   "isPublic": true,                           // True if the Visitor has Open permission on the requested content.
   "entries": [                                // array of the combined (effective and explicit) entries
     {                                         // First entry
       "identity": {                           // Identity of the entry
         "id": 1,                              // Id of the identity content
         "path": "/Root/IMS/Public/johnny42",  // Path of the identity content
         "name": "Johnny42",                   //
         "displayName": "Johnny42",            //
         "domain": "Public",                   //
         "kind": "user",                       // simplified type: "user" or "group"
         "avatar": ""                          //
       },                                      //
       "ancestor": "/Root",                    // Path of the parent entry
       "inherited": true,                      // If true, this entry does not have explicit permissions.
       "propagates": true,                     // This entry is inheritable or not (in other terminology: "localOnly")
       "permissions": {                        // Permissions as an associative array
         "See": {                              // "See" permission descriptor. The sub object is null if it is not set
           "value": "allow",                   // Permission value. Can be "allow", "deny"
           "from": "/Root"                     // Path of the content where this permission is explicitly granted.
         },                                    //
         "Open": {                             //
           "value": "allow",                   //
           "from": "/Root"                     //
         },                                    //
         "Publish": {                          //
           "value": "allow",                   // The "Publish" permission is allowed...
           "from": null                        // ... and granted on this content
         },
         ...
       }
     },
     ...
   ]
 }
```

### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetAcl
```
The `targetContent` can be any content type
### Parameters:
There are no parameters.

### Return value:
The access control list for the requested content. (Type: `object`).

### Requirements:
- **AllowedRoles**: Everyone

