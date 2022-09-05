---
title: GetClientRequestParameters
metaTitle: "sensenet API - GetClientRequestParameters"
metaDescription: "GetClientRequestParameters"
---

## GetClientRequestParameters
- Method: **GET** or optionally POST.

Gets authority information for a repository.
 This action is intended for internal use by the admin UI client.

### Example

``` 
 {
     "authority": "https://example.is.sensenet.cloud",
     "client_id": "abcdefg"
 }
```

### Request example:

```
GET /odata.svc/('Root')/GetClientRequestParameters?clientType=_value_
```
or
```
POST /odata.svc/('Root')/GetClientRequestParameters
DATA:
models=[{
  "clientType": _value_
}]
```
Can only be called on the root content.
### Parameters:
- **clientType** (`string`): Client type (currently: adminui).

### Return value:
A custom object containing the url of the Identity Server used by the repository
 and the appropriate client id that should be used by the client.
  (Type: `object`).

### Requirements:
- **AllowedRoles**: All

