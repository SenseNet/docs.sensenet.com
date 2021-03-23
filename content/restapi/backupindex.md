---
title: BackupIndex
metaTitle: "sensenet API - BackupIndex"
metaDescription: "BackupIndex"
---

## BackupIndex
- Method: **POST**.

Takes a snapshot of the index and copies it to the given target.
 The target is typically a directory in the filesystem.
 The backup is an exclusive operation that can be started only once.
 

 The response contains a state and the current backup descriptor. The history is always null.

 An example if the backup is started successfully:
 ``` 
 {
   "State": "Started",
   "Current": {
     "StartedAt": "0001-01-01T00:00:00",
     "FinishedAt": "0001-01-01T00:00:00",
     "TotalBytes": 0,
     "CopiedBytes": 0,
     "CountOfFiles": 0,
     "CopiedFiles": 0,
     "CurrentlyCopiedFile": null,
     "Message": null
   },
   "History": null
 }
```

 Another example if the backup is already executing:
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
   "History": null
 }
```

### Request example:

```
POST /odata.svc/('Root')/BackupIndex
DATA:
models=[{
  "target": _value_
}]
```
Can only be called on the root content.
### Parameters:
- **target** (`string`): Target of the copy operation.

### Return value:
A Task that represents the asynchronous operation and wraps the _BackupResponse_.
  (Type: `BackupResponse`).

### Requirements:
- **AllowedRoles**: Administrators, Developers

