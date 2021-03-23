---
title: GetRecentIndexingActivities
metaTitle: "sensenet API - GetRecentIndexingActivities"
metaDescription: "GetRecentIndexingActivities"
---

## GetRecentIndexingActivities
- Method: **GET** or optionally POST.

A developer tool that returns an object that contains information about the execution of the last
 few indexing activities.
 

 A possible response:
 ``` 
 {
   "State": {
     "Serializer": {
       "LastQueued": 1,
       "QueueLength": 0,
       "Queue": []
     },
     "DependencyManager": {
       "WaitingSetLength": 0,
       "WaitingSet": []
     },
     "Termination": {
       "LastActivityId": 1,
       "Gaps": []
     }
   },
   "Message": null,
   "RecentLength": 1,
   "Recent": [
     {
       "Id": 1,
       "TypeName": "AddDocument",
       "FromReceiver": false,
       "FromDb": false,
       "IsStartup": false,
       "Error": null,
       "WaitedFor": null,
       "ArrivedAt": "2020-08-27T08:46:16.3838978Z",
       "StartedAt": "2020-08-27T08:46:16.3855456Z",
       "FinishedAt": "2020-08-27T08:46:16.3969588Z",
       "WaitTime": "00:00:00.0016478",
       "ExecTime": "00:00:00.0114132",
       "FullTime": "00:00:00.0130610"
     }
   ]
 }
```

### Request example:

```
GET /odata.svc/('Root')/GetRecentIndexingActivities
```
Can only be called on the root content.
### Parameters:
There are no parameters.

### Return value:
An _IndexingActivityHistory_ instance. (Type: `IndexingActivityHistory`).

### Requirements:
- **AllowedRoles**: Administrators, Developers

