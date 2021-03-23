---
title: CheckSecurityConsistency
metaTitle: "sensenet API - CheckSecurityConsistency"
metaDescription: "CheckSecurityConsistency"
---

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
The SecurityConsistencyResult instance. (Type: `SecurityConsistencyResult`).

### Requirements:
- **AllowedRoles**: Administrators, Developers

