---
title: ProtectedPaths
metaTitle: "sensenet API - ProtectedPaths"
metaDescription: "ProtectedPaths"
---

## ProtectedPaths
- Method: **GET** or optionally POST.

Returns a path list of Contents that cannot be deleted.
 

 The default is the following:
 ``` 
 [
   "/Root",
   "/Root/IMS",
   "/Root/IMS/BuiltIn",
   "/Root/IMS/BuiltIn/Portal",
   "/Root/IMS/BuiltIn/Portal/Admin",
   "/Root/IMS/BuiltIn/Portal/Administrators",
   "/Root/IMS/BuiltIn/Portal/Visitor",
   "/Root/IMS/BuiltIn/Portal/Everyone",
   "/Root/IMS/Public",
   "/Root/System",
   "/Root/System/Schema",
   "/Root/System/Schema/ContentTypes",
   "/Root/System/Schema/ContentTypes/GenericContent",
   "/Root/System/Schema/ContentTypes/GenericContent/Folder",
   "/Root/System/Schema/ContentTypes/GenericContent/File",
   "/Root/System/Schema/ContentTypes/GenericContent/User",
   "/Root/System/Schema/ContentTypes/GenericContent/Group"
 ]
```

### Request example:

```
GET /odata.svc/('Root')/ProtectedPaths
```
Can only be called on the root content.
### Parameters:
There are no parameters.

### Return value:
A string array as a path list. (Type: `string[]`).

### Requirements:
- **AllowedRoles**: Everyone

