---
title: ResetRecentIndexingActivities
metaTitle: "sensenet API - ResetRecentIndexingActivities"
metaDescription: "ResetRecentIndexingActivities"
---

## ResetRecentIndexingActivities
- Method: **POST**.

A developer tool that resets the indexing activity history.
 WARNING: Do not use it in a production environment.
 

 A possible response:
 ``` 
 {
   "State": {
     "Serializer": {
       "LastQueued": 0,
       "QueueLength": 0,
       "Queue": []
     },
     "DependencyManager": {
       "WaitingSetLength": 0,
       "WaitingSet": []
     },
     "Termination": {
       "LastActivityId": 0,
       "Gaps": []
     }
   },
   "Message": null,
   "RecentLength": 0,
   "Recent": []
 }
```

### Request example:

```
POST /odata.svc/('Root')/ResetRecentIndexingActivities
```
Can only be called on the root content.
### Parameters:
There are no parameters.

### Return value:
An _IndexingActivityHistory_ instance. (Type: `IndexingActivityHistory`).

### Requirements:
- **AllowedRoles**: Administrators, Developers

