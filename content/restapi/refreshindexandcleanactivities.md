---
title: RefreshIndexAndCleanActivities
metaTitle: "sensenet API - RefreshIndexAndCleanActivities"
metaDescription: "RefreshIndexAndCleanActivities"
---

## RefreshIndexAndCleanActivities
- Method: **POST**.

Refreshes all index documents in the index using the already existing
 index data stored in the database. It also cleans up remaining
 indexing activities from the database.
 As this action creates a completely new index, must be used cautiously
 and only by administrators.

### Request example:
The content provided by the infrastructure.
```
POST /odata.svc/('Root')/RefreshIndexAndCleanActivities
```
Can only be called on the root content.
### Parameters:
There are no parameters.

### Requirements:
- **AllowedRoles**: Administrators, Developers

