---
title: GetApiUsagePeriods
metaTitle: "sensenet API - GetApiUsagePeriods"
metaDescription: "GetApiUsagePeriods"
---

## GetApiUsagePeriods
- Method: **GET** or optionally POST.

Gets the availability of HTTP request statistics by time window
 and the number of corresponding data points.

### Request example:

```
GET /odata.svc/('Root')/GetApiUsagePeriods?timeWindow=_value_
```
or
```
POST /odata.svc/('Root')/GetApiUsagePeriods
DATA:
models=[{
  "timeWindow": _value_
}]
```
Can only be called on the root content.
### Parameters:
- **timeWindow** (`TimeWindow?`) optional: Size of the time window: Hour, Day, Month or Year. Default: Month.

### Return value:
An API usage statistical data containing start and end dates and count of records. (Type: `object`).

### Requirements:
- **AllowedRoles**: Administrators, Developers

