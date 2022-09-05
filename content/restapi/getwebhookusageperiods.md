---
title: GetWebHookUsagePeriods
metaTitle: "sensenet API - GetWebHookUsagePeriods"
metaDescription: "GetWebHookUsagePeriods"
---

## GetWebHookUsagePeriods
- Method: **GET** or optionally POST.

Gets the availability of webhook statistics by time window
 and the number of corresponding data points.

### Request example:

```
GET /odata.svc/('Root')/GetWebHookUsagePeriods?timeWindow=_value_
```
or
```
POST /odata.svc/('Root')/GetWebHookUsagePeriods
DATA:
models=[{
  "timeWindow": _value_
}]
```
Can only be called on the root content.
### Parameters:
- **timeWindow** (`TimeWindow?`) optional: Size of the time window: Hour, Day, Month or Year. Default: Month.

### Return value:
A webhook statistical data containing start and end dates and count of records. (Type: `object`).

### Requirements:
- **AllowedRoles**: Administrators, Developers

