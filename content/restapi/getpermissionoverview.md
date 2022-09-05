---
title: GetPermissionOverview
metaTitle: "sensenet API - GetPermissionOverview"
metaDescription: "GetPermissionOverview"
---

## GetPermissionOverview
- Method: **GET** or optionally POST.

Gets aggregated permission information on the content
 for the specified user.

### Example

``` 
 [
      {
          "identity": {
              "id": 1234,
              "path": "/Root/IMS/Public/user1",
              "name": "user1",
              "displayName": "User 1",
              "kind": "User",
              "domain": "public"
          },
         "permissions": [
             {
                 "name": "See",
                 "index": 0,
                 "type": "allowed",
                 "allowfrom": [
                     "path": "/Root/Content/SampleWorkspace",
                     "identity": "..../IdentitfiedUsers"
                 ],
                 "denyfrom": [
                     "path": "/Root/Content",
                     "identity": "..../alba"
                 ]
             }
      }
 ]
```

### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetPermissionOverview?identity=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetPermissionOverview
DATA:
models=[{
  "identity": _value_
}]
```
### Parameters:
- **identity** (`string`): User content path.

### Return value:
An array of permission entries relevant for the provided
 user and their groups. (Type: `object`).


