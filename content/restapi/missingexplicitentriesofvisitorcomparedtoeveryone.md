---
title: MissingExplicitEntriesOfVisitorComparedToEveryone
metaTitle: "sensenet API - MissingExplicitEntriesOfVisitorComparedToEveryone"
metaDescription: "MissingExplicitEntriesOfVisitorComparedToEveryone"
---

## MissingExplicitEntriesOfVisitorComparedToEveryone
- Method: **GET** or optionally POST.

Returns a path list in the subtree of the requested content
 containing items that have explicit security entry for the Everyone group but
 do not have an explicit security entry for the Visitor user.
 

 Result example:
 ``` 
 [
   "/Root/(apps)/GenericContent/Versions",
   "/Root/(apps)/User/Logout",
   "/Root/Content",
   "/Root/Trash"
 ]
```

### Request example:

```
GET /odata.svc/Root/...('targetContent')/MissingExplicitEntriesOfVisitorComparedToEveryone
```
### Parameters:
There are no parameters.

### Return value:
Path list. (Type: `string[]`).

### Requirements:
- **AllowedRoles**: Administrators, Developers

