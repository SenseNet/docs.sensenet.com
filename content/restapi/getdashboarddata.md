---
title: GetDashboardData
metaTitle: "sensenet API - GetDashboardData"
metaDescription: "GetDashboardData"
---

## GetDashboardData
- Method: **GET** or optionally POST.

Gets dashboard data about this repository.

### Request example:

```
GET /odata.svc/('Root')/GetDashboardData
```
Can only be called on the root content.
### Parameters:
There are no parameters.

### Return value:
Dashboard data or an empty object. (Type: `object`).

### Requirements:
- **AllowedRoles**: Everyone

