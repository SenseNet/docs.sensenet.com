---
title: GetWebHookUsageList
metaTitle: "sensenet API - GetWebHookUsageList"
metaDescription: "GetWebHookUsageList"
---

## GetWebHookUsageList
- Method: **GET** or optionally POST.

Gets all webhook usage information.

### Request example:

```
GET /odata.svc/('Root')/GetWebHookUsageList?maxTime=_value_&count=_value_
```
or
```
POST /odata.svc/('Root')/GetWebHookUsageList
DATA:
models=[{
  "maxTime": _value_, 
  "count": _value_
}]
```
Can only be called on the root content.
### Parameters:
- **maxTime** (`DateTime?`) optional: The maximum date boundary of the query. Only records before this date
 will be returned. Default: current time.
- **count** (`int`) optional: Maximum number of records to load. Default: 10.

### Return value:
A list of webhook usage records. (Type: `WebHookUsageListItemViewModel[]`).

### Requirements:
- **AllowedRoles**: Administrators, Developers

