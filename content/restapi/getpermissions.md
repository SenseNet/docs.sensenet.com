---
title: GetPermissions
metaTitle: "sensenet API - GetPermissions"
metaDescription: "GetPermissions"
---

## GetPermissions
- Method: **GET** or optionally POST.

Returns the effective permission information of the requested content grouped by identities.
 The output can be filtered by the _identity_ parameter.
 

 If the current user does not have `SeePermissions` right, the provided identity must be the current user
 in which case they will get only their own permission entries.
 This is a possible response:
 ``` 
 {
   "id": 1347,
   "path": "/Root/Content",
   "inherits": false,
   "entries": [
     {
       "identity": {
         "id": 7,
         "path": "/Root/IMS/BuiltIn/Portal/Administrators",
         "name": "Administrators",
         "displayName": "\"\"",
         "domain": "BuiltIn",
         "kind": "group",
         "avatar": null
       },
       "propagates": true,
       "permissions": {
         "See": {
           "value": "allow",
           "from": null,
           "identity": "/Root/IMS/BuiltIn/Portal/Administrators"
         },
         "Preview": {
           "value": "allow",
           "from": null,
           "identity": "/Root/IMS/BuiltIn/Portal/Administrators"
         },
         ...
         "Custom30": null,
         "Custom31": null,
         "Custom32": null
       }
     },
     {
       "identity": {
         "id": 8,
         "path": "/Root/IMS/BuiltIn/Portal/Everyone",
         ...
       },
       "propagates": false,
       "permissions": {
         ...
       }
     }
   ]
 }
```

### Exception
- Exception: Throws if the user doesn't have `SeePermissions` right
 and _identity_ is not the current user.

### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetPermissions?identity=/Root/IMS/BuiltIn/Portal/Everyone
```
or
```
POST /odata.svc/Root/...('targetContent')/GetPermissions
DATA:
models=[{
  "identity": /Root/IMS/BuiltIn/Portal/Everyone
}]
```
The `targetContent` can be any content type
### Parameters:
- **identity** (`string`) optional: Full path of an identity (group or user).
 

### Requirements:
- **AllowedRoles**: Everyone

