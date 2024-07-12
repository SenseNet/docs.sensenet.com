---
title: CheckAllowedChildTypesOfFolders
metaTitle: "sensenet API - CheckAllowedChildTypesOfFolders"
metaDescription: "CheckAllowedChildTypesOfFolders"
---

## CheckAllowedChildTypesOfFolders
- Method: **GET** or optionally POST.

Checks all containers in the requested subtree and returns all paths where AllowedChildTypes is empty.


 The response is a list of content paths where AllowedChildTypes is empty categorized by content type names.
 Here is an annotated example:
 ```
 {
   "Domain": [              // ContentType name
     "/Root/...",           // Path1
     "/Root/...",           // Path2
   ],
   "OrganizationalUnit": [  // ContentType name
     "/Root/..."            // Path1
   ]
 }
```

### Request example:

```
GET /odata.svc/Root/...('targetContent')/CheckAllowedChildTypesOfFolders
```
### Parameters:
There are no parameters.

### Return value:
A dictionary where the ContentType name is the key and a path list is the value. (Type: `Dictionary<string, List<string>>`).

### Requirements:
- **AllowedRoles**: Administrators, Developers

