---
title: Indexing
metaTitle: "sensenet API - Indexing"
metaDescription: "Indexing"
---

## RebuildIndex
- Method: **POST**.

Rebuilds the index document of a content and optionally of all documents in the whole subtree.
 In case the value of rebuildLevel is IndexOnly the index document is refreshed
 based on the already existing extracted data stored in the database. This is a significantly faster method
 and it is designed for cases when only the place of the content in the tree has changed or the index got corrupted.
 The DatabaseAndIndex algorithm will reindex the full content than update the index in the
 external index provider the same way as the light-weight algorithm.

### Request example:
The content provided by the infrastructure.
```
POST /odata.svc/Root/...('targetContent')/RebuildIndex
DATA:
models=[{
  "recursive": _value_, 
  "rebuildLevel": _value_
}]
```
The `targetContent` can be any content type
### Parameters:
- **recursive** (bool): Whether child content should be reindexed or not. Default: false.
- **rebuildLevel** (IndexRebuildLevel): The algorithm selector. Value can be <value>IndexOnly</value> or <value>DatabaseAndIndex</value>. Default: <value>IndexOnly</value>

### Requirements:
- **AllowedRoles**: Administrators, Developers
- **RequiredPermissions**: Save

## RebuildIndexSubtree
- Method: **POST**.

Performs a full reindex operation on the content and the whole subtree.

### Request example:
The content provided by the infrastructure.
```
POST /odata.svc/Root/...('targetContent')/RebuildIndexSubtree
```
The `targetContent` can be any content type
### Parameters:
There are no parameters.

### Requirements:
- **AllowedRoles**: Administrators, Developers

## RefreshIndexSubtree
- Method: **POST**.

Refreshes the index document of the content and the whole subtree using the already existing index data stored in the database.

### Request example:
The content provided by the infrastructure.
```
POST /odata.svc/Root/...('targetContent')/RefreshIndexSubtree
```
The `targetContent` can be any content type
### Parameters:
There are no parameters.

### Requirements:
- **AllowedRoles**: Administrators, Developers

## BackupIndex
- Method: **POST**.

Takes a snapshot of the index and copies it to the given target.
 The target is typically a directory in the filesystem.
 The backup is an exclusive operation that can be started only once.
 

 The response contains a state and the current backup descriptor. The history is always null.
 - If the backup is started successfully:
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

 - If the backup is already executing:
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
  "target": "_value_"
}]
```
Can only be called on the root content.
### Parameters:
- **target** (string): Target of the copy operation.

### Return value:
A Task that represents the asynchronous operation and wraps the _BackupResponse_.
  (Type: STT.Task&lt;BackupResponse>).

### Requirements:
- **AllowedRoles**: Administrators, Developers

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
A Task that represents the asynchronous operation and wraps the _BackupResponse_. (Type: STT.Task&lt;BackupResponse>).

### Requirements:
- **AllowedRoles**: Administrators, Developers

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
A Task that represents the asynchronous operation and wraps the _BackupResponse_. (Type: STT.Task&lt;BackupResponse>).

### Requirements:
- **AllowedRoles**: Administrators, Developers

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
An _IndexingActivityHistory_ instance. (Type: IndexingActivityHistory).

### Requirements:
- **AllowedRoles**: Administrators, Developers

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
An _IndexingActivityHistory_ instance. (Type: IndexingActivityHistory).

### Requirements:
- **AllowedRoles**: Administrators, Developers

## CheckIndexIntegrity
- Method: **GET** or optionally POST.

DEPRECATED. Checking index integrity online is not supported anymore. Use an offline solution instead.

### Request example:

```
GET /odata.svc/Root/...('targetContent')/CheckIndexIntegrity?recurse=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/CheckIndexIntegrity
DATA:
models=[{
  "recurse": _value_
}]
```
### Parameters:
- **recurse** (bool): 


