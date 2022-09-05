---
title: GetApiUsagePeriod
metaTitle: "sensenet API - GetApiUsagePeriod"
metaDescription: "GetApiUsagePeriod"
---

## GetApiUsagePeriod
- Method: **GET** or optionally POST.

Gets aggregated HTTP requests statistical data in the provided time window.

### Request example:

```
GET /odata.svc/('Root')/GetApiUsagePeriod?timeWindow=_value_&time=_value_
```
or
```
POST /odata.svc/('Root')/GetApiUsagePeriod
DATA:
models=[{
  "timeWindow": _value_, 
  "time": _value_
}]
```
Can only be called on the root content.
### Parameters:
- **timeWindow** (`TimeWindow?`) optional: Size of the time window: Hour, Day, Month or Year. Default: Month.
- **time** (`DateTime?`) optional: Start time. Default: now.

### Return value:
API usage data containing time window information and a list of aggregated data points. (Type: `object`).

### Requirements:
- **AllowedRoles**: Administrators, Developers

