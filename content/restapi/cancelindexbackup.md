---
title: CancelIndexBackup
metaTitle: "sensenet API - CancelIndexBackup"
metaDescription: "CancelIndexBackup"
---

## CancelIndexBackup
- Method: **POST**.

Requests the termination of the currently running backup operation.
 

 The response contains a state, the current backup descriptor (if the backup is running) and a history of
 backup operations that happened since the application has started.
 For example:
 ``` 
 {
   "State": "CancelRequested",
   "Current": {
     "StartedAt": "2020-08-26T22:46:29.4516539Z",
     "FinishedAt": "0001-01-01T00:00:00",
     "TotalBytes": 126,
     "CopiedBytes": 42,
     "CountOfFiles": 3,
     "CopiedFiles": 1,
     "CurrentlyCopiedFile": "File2",
     "Message": null
   },
   "History": []
 }
```

### Request example:

```
POST /odata.svc/('Root')/CancelIndexBackup
```
Can only be called on the root content.
### Parameters:
There are no parameters.

### Return value:
A Task that represents the asynchronous operation and wraps the _BackupResponse_. (Type: `BackupResponse`).

### Requirements:
- **AllowedRoles**: Administrators, Developers

