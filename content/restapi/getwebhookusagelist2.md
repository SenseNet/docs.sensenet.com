---
title: GetWebHookUsageList
metaTitle: "sensenet API - GetWebHookUsageList"
metaDescription: "GetWebHookUsageList"
---

## GetWebHookUsageList
- Method: **GET** or optionally POST.

Gets webhook usage information for the target subscription.

### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetWebHookUsageList?maxTime=_value_&count=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetWebHookUsageList
DATA:
models=[{
  "maxTime": _value_, 
  "count": _value_
}]
```
The `targetContent` can be WebHookSubscription
### Parameters:
- **maxTime** (`DateTime?`) optional: The maximum date boundary of the query. Only records before this date
 will be returned. Default: current time.
- **count** (`int`) optional: Maximum number of records to load. Default: 10.

### Return value:
A list of webhook usage records. (Type: `WebHookUsageListItemViewModel[]`).

### Requirements:
- **AllowedRoles**: Administrators, Developers

