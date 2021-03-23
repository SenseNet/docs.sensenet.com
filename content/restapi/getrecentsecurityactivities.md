---
title: GetRecentSecurityActivities
metaTitle: "sensenet API - GetRecentSecurityActivities"
metaDescription: "GetRecentSecurityActivities"
---

## GetRecentSecurityActivities
- Method: **GET** or optionally POST.

A developer tool that returns an object that contains information about the execution of the last
 few security activities.
 

 Example response (truncated):
 ``` 
 {
   "State": {
     "Serializer": {
       "LastQueued": 154,
       "QueueLength": 0,
       "Queue": []
     },
     "DependencyManager": {
       "WaitingSetLength": 0,
       "WaitingSet": []
     },
     "Termination": {
       "LastActivityId": 154,
       "GapsLength": 0,
       "Gaps": []
     }
   },
   "Message": null,
   "RecentLength": 154,
   "Recent": [
     {
       "Id": 1,
       "TypeName": "CreateSecurityEntityActivity",
       "FromReceiver": false,
       "FromDb": false,
       "IsStartup": false,
       "Error": null,
       "WaitedFor": null,
       "ArrivedAt": "2020-08-27T08:46:16.0132362Z",
       "StartedAt": "2020-08-27T08:46:16.0150841Z",
       "FinishedAt": "2020-08-27T08:46:16.0294322Z",
       "WaitTime": "00:00:00.0018479",
       "ExecTime": "00:00:00.0143481",
       "FullTime": "00:00:00.0161960"
     },
     {
       "Id": 2,
       "TypeName": "CreateSecurityEntityActivity",
       "FromReceiver": false,
       "FromDb": false,
       "IsStartup": false,
       "Error": null,
       "WaitedFor": [
         1
       ],
       "ArrivedAt": "2020-08-27T08:46:16.019736Z",
       "StartedAt": "2020-08-27T08:46:16.0300987Z",
       "FinishedAt": "2020-08-27T08:46:16.031381Z",
       "WaitTime": "00:00:00.0103627",
       "ExecTime": "00:00:00.0012823",
       "FullTime": "00:00:00.0116450"
     }
     ...
```

### Request example:

```
GET /odata.svc/('Root')/GetRecentSecurityActivities
```
Can only be called on the root content.
### Parameters:
There are no parameters.

### Return value:
A _SenseNet.Security.Messaging.SecurityActivityHistory_ instance. (Type: `SenseNet.Security.Messaging.SecurityActivityHistory`).

### Requirements:
- **AllowedRoles**: Administrators, Developers

