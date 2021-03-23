---
title: QueryIndexBackup
metaTitle: "sensenet API - QueryIndexBackup"
metaDescription: "QueryIndexBackup"
---

## QueryIndexBackup
- Method: **GET** or optionally POST.

Queries the index backup state in the system.
 

 The response contains a state, the current backup descriptor (if the backup is running) and a history of
 backup operations that happened since the application has started.
 For example:
 ``` 
 {
   "State": "Executing",
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

 The available states:

 | State     | Description                                                 |
 | --------- | ----------------------------------------------------------- |
 | Initial   | there has been no backup since the application was launched |
 | Executing | the backup is currently running                             |
 | Canceled  | the last backup operation was canceled without error        |
 | Faulted   | an error occured during the last backup operation           |
 | Finished  | the last backup is successfully finished                    |

### Request example:

```
GET /odata.svc/('Root')/QueryIndexBackup
```
Can only be called on the root content.
### Parameters:
There are no parameters.

### Return value:
A Task that represents the asynchronous operation and wraps the _BackupResponse_. (Type: `BackupResponse`).

### Requirements:
- **AllowedRoles**: Administrators, Developers

