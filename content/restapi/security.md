---
title: Security
metaTitle: "sensenet API - Security"
metaDescription: "Security"
---

## Encrypt
- Method: **POST**.


### Request example:

```
POST /odata.svc/('Root')/Encrypt
DATA:
models=[{
  "text": "_value_"
}]
```
Can only be called on the root content.
### Parameters:
- **text** (string): 

### Requirements:
- **AllowedRoles**: Administrators, Developers

## Decrypt
- Method: **POST**.


### Request example:

```
POST /odata.svc/('Root')/Decrypt
DATA:
models=[{
  "text": "_value_"
}]
```
Can only be called on the root content.
### Parameters:
- **text** (string): 

### Requirements:
- **AllowedRoles**: Administrators, Developers

## ProtectedPaths
- Method: **GET** or optionally POST.

Returns a path list of Contents that cannot be deleted.
 

 The default is the following:
 ``` 
 [
   "/Root",
   "/Root/IMS",
   "/Root/IMS/BuiltIn",
   "/Root/IMS/BuiltIn/Portal",
   "/Root/IMS/BuiltIn/Portal/Admin",
   "/Root/IMS/BuiltIn/Portal/Administrators",
   "/Root/IMS/BuiltIn/Portal/Visitor",
   "/Root/IMS/BuiltIn/Portal/Everyone",
   "/Root/IMS/Public",
   "/Root/System",
   "/Root/System/Schema",
   "/Root/System/Schema/ContentTypes",
   "/Root/System/Schema/ContentTypes/GenericContent",
   "/Root/System/Schema/ContentTypes/GenericContent/Folder",
   "/Root/System/Schema/ContentTypes/GenericContent/File",
   "/Root/System/Schema/ContentTypes/GenericContent/User",
   "/Root/System/Schema/ContentTypes/GenericContent/Group"
 ]
```

### Request example:

```
GET /odata.svc/('Root')/ProtectedPaths
```
Can only be called on the root content.
### Parameters:
There are no parameters.

### Return value:
A string array as a path list. (Type: string[]).

### Requirements:
- **AllowedRoles**: Everyone

## MissingExplicitEntriesOfVisitorComparedToEveryone
- Method: **GET** or optionally POST.

Returns a path list in the subtree of the requested content
 containing items that have explicit security entry for the Everyone group but
 do not have an explicit security entry for the Visitor user.
 

 Result example:
 ``` 
 [
   "/Root/(apps)/GenericContent/Versions",
   "/Root/(apps)/User/Logout",
   "/Root/Content",
   "/Root/Trash"
 ]
```

### Request example:

```
GET /odata.svc/Root/...('targetContent')/MissingExplicitEntriesOfVisitorComparedToEveryone
```
### Parameters:
There are no parameters.

### Return value:
Path list. (Type: IEnumerable&lt;string>).

### Requirements:
- **AllowedRoles**: Administrators, Developers

## CopyExplicitEntriesOfEveryoneToVisitor
- Method: **POST**.

Copies all explicit permission entries of the Everyone group for the Visitor user.
 The copy operation is executed on all content in the subtree of the requested content
 that are not in the _exceptList_.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/CopyExplicitEntriesOfEveryoneToVisitor
DATA:
models=[{
  "exceptList": ["_item1_", "_item2_"]
}]
```
### Parameters:
- **exceptList** (string[]): White list of untouched Contents.

### Return value:
`Ok` if the operation is successfully executed. (Type: string).

### Requirements:
- **AllowedRoles**: Administrators, Developers

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
A _SenseNet.Security.Messaging.SecurityActivityHistory_ instance. (Type: SenseNet.Security.Messaging.SecurityActivityHistory).

### Requirements:
- **AllowedRoles**: Administrators, Developers

## CheckSecurityConsistency
- Method: **GET** or optionally POST.

Checks the security consistency in the subtree of the requested content.
 WARNING! The operation can be slow so use it only in justified cases and with a scope as small as possible.
 

Compares the security cache and the main database. the investigation covers the
 parallelism of the entity vs content structure, membership vs content-references,
 and entity-identity existence in security entries. If the security data is consistent,
 the response is the following (the comments are not part of the response):
 ``` 
 {
   "IsConsistent": true,                    // aggregated all categories validity
   "IsMembershipConsistent": true,          // aggregated membership category validity
   "IsEntityStructureConsistent": true,     // aggregated entity structure category validity
   "IsAcesConsistent": true,                // aggregated ACE category validity
   "ElapsedTime": "00:00:00.0087222",       // time of investigation
   "MissingEntitiesFromRepository": [],     // entity structure category (SecurityEntityInfo[])
   "MissingEntitiesFromSecurityDb": [],     // entity structure category (SecurityEntityInfo[])
   "MissingEntitiesFromSecurityCache": [],  // entity structure category (SecurityEntityInfo[])
   "MissingMembershipsFromCache": [],       // membership category (SecurityMembershipInfo[])
   "UnknownMembershipInSecurityDb": [],     // membership category (SecurityMembershipInfo[])
   "MissingMembershipsFromSecurityDb": [],  // membership category (SecurityMembershipInfo[])
   "UnknownMembershipInCache": [],          // membership category (SecurityMembershipInfo[])
   "MissingRelationFromFlattenedUsers": [], // membership category (SecurityMembershipInfo[])
   "UnknownRelationInFlattenedUsers": [],   // membership category (SecurityMembershipInfo[])
   "InvalidACE_MissingEntity": [],          // ACE category (StoredAceDebugInfo[])
   "InvalidACE_MissingIdentity": []         // ACE category (StoredAceDebugInfo[])
 }
```

 In case of invalid state, at least one of the categories contains one or more sub-items.
 Here is an example for every item type.
 

`SecurityEntityInfo` example (an item in MissingEntitiesFromRepository, MissingEntitiesFromSecurityDb, MissingEntitiesFromSecurityCache)
 ``` 
 {
   "Id": 1,
   "ParentId": 5,
   "OwnerId": 1,
   "Path": "/Root/IMS/BuiltIn/Portal/Admin"
 }
```

`SecurityMembershipInfo` example (an item in MissingMembershipsFromCache, UnknownMembershipInSecurityDb, MissingMembershipsFromSecurityDb, UnknownMembershipInCache, MissingRelationFromFlattenedUsers, UnknownRelationInFlattenedUsers)
 ``` 
 {
   "GroupId": 5,
   "MemberId": 9,
   "GroupPath": "/Root/IMS/BuiltIn/Portal",
   "MemberPath": "/Root/IMS/BuiltIn/Portal/Owners"
 }
```

`StoredAceDebugInfo` example (an item in InvalidACE_MissingEntity, InvalidACE_MissingIdentity)
 ``` 
 {
   "EntityId": 2,
   "IdentityId": 7,
   "LocalOnly": false,
   "AllowBits": 524287,
   "DenyBits": 0,
   "StringView": "(2)|Normal|+(7):_____________________________________________+++++++++++++++++++"
 }
```

### Request example:

```
GET /odata.svc/Root/...('targetContent')/CheckSecurityConsistency
```
The `targetContent` can be any content type
### Parameters:
There are no parameters.

### Return value:
The SecurityConsistencyResult instance. (Type: SecurityConsistencyResult).

### Requirements:
- **AllowedRoles**: Administrators, Developers

