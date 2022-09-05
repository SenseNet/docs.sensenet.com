---
title: GetApiUsageList
metaTitle: "sensenet API - GetApiUsageList"
metaDescription: "GetApiUsageList"
---

## GetApiUsageList
- Method: **GET** or optionally POST.

Gets a list of HTTP requests received by the repository before the provided time.
 

 This action was designed to aid a paging client that needs to display only a handful of records on screen.
 Querying for a longer period or for many records may result in a slower response.

### Request example:

```
GET /odata.svc/('Root')/GetApiUsageList?maxTime=_value_&count=_value_
```
or
```
POST /odata.svc/('Root')/GetApiUsageList
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
A list of api usage records. (Type: `ApiUsageListItemViewModel[]`).

### Requirements:
- **AllowedRoles**: Administrators, Developers

