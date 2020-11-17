---
title: Permissions
metaTitle: "sensenet API - Permissions"
metaDescription: "Permissions"
---

## GetRelatedIdentities
- Method: **GET** or optionally POST.


### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetRelatedIdentities?permissionLevel=_value_&identityKind=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetRelatedIdentities
DATA:
models=[{
  "permissionLevel": "_value_", 
  "identityKind": "_value_"
}]
```
The `targetContent` can be any content type
### Parameters:
- **permissionLevel** (string): 
- **identityKind** (string): 

### Requirements:
- **AllowedRoles**: Everyone

## GetRelatedPermissions
- Method: **GET** or optionally POST.


### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetRelatedPermissions?permissionLevel=_value_&explicitOnly=_value_&memberPath=_value_&includedTypes=_item1_&includedTypes=_item2_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetRelatedPermissions
DATA:
models=[{
  "permissionLevel": "_value_", 
  "explicitOnly": _value_, 
  "memberPath": "_value_", 
  "includedTypes": ["_item1_", "_item2_"]
}]
```
The `targetContent` can be any content type
### Parameters:
- **permissionLevel** (string): 
- **explicitOnly** (bool): 
- **memberPath** (string): 
- **includedTypes** (string[]): 

### Requirements:
- **AllowedRoles**: Everyone

## GetRelatedItems
- Method: **GET** or optionally POST.


### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetRelatedItems?permissionLevel=_value_&explicitOnly=_value_&memberPath=_value_&permissions=_item1_&permissions=_item2_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetRelatedItems
DATA:
models=[{
  "permissionLevel": "_value_", 
  "explicitOnly": _value_, 
  "memberPath": "_value_", 
  "permissions": ["_item1_", "_item2_"]
}]
```
The `targetContent` can be any content type
### Parameters:
- **permissionLevel** (string): 
- **explicitOnly** (bool): 
- **memberPath** (string): 
- **permissions** (string[]): 

### Requirements:
- **AllowedRoles**: Everyone

## GetRelatedIdentitiesByPermissions
- Method: **GET** or optionally POST.


### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetRelatedIdentitiesByPermissions?permissionLevel=_value_&identityKind=_value_&permissions=_item1_&permissions=_item2_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetRelatedIdentitiesByPermissions
DATA:
models=[{
  "permissionLevel": "_value_", 
  "identityKind": "_value_", 
  "permissions": ["_item1_", "_item2_"]
}]
```
The `targetContent` can be any content type
### Parameters:
- **permissionLevel** (string): 
- **identityKind** (string): 
- **permissions** (string[]): 

### Requirements:
- **AllowedRoles**: Everyone

## GetRelatedItemsOneLevel
- Method: **GET** or optionally POST.


### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetRelatedItemsOneLevel?permissionLevel=_value_&memberPath=_value_&permissions=_item1_&permissions=_item2_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetRelatedItemsOneLevel
DATA:
models=[{
  "permissionLevel": "_value_", 
  "memberPath": "_value_", 
  "permissions": ["_item1_", "_item2_"]
}]
```
The `targetContent` can be any content type
### Parameters:
- **permissionLevel** (string): 
- **memberPath** (string): 
- **permissions** (string[]): 

### Requirements:
- **AllowedRoles**: Everyone

## GetAllowedUsers
- Method: **GET** or optionally POST.


### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetAllowedUsers?permissions=_item1_&permissions=_item2_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetAllowedUsers
DATA:
models=[{
  "permissions": ["_item1_", "_item2_"]
}]
```
The `targetContent` can be any content type
### Parameters:
- **permissions** (string[]): 

### Requirements:
- **AllowedRoles**: Everyone

## GetPermissionInfo
- Method: **GET** or optionally POST.


### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetPermissionInfo?identity=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetPermissionInfo
DATA:
models=[{
  "identity": "_value_"
}]
```
The `targetContent` can be any content type
### Parameters:
- **identity** (string): 

### Requirements:
- **AllowedRoles**: Everyone

## GetChildrenPermissionInfo
- Method: **GET** or optionally POST.


### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetChildrenPermissionInfo?identity=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetChildrenPermissionInfo
DATA:
models=[{
  "identity": "_value_"
}]
```
The `targetContent` can be any content type
### Parameters:
- **identity** (string): 

### Requirements:
- **AllowedRoles**: Everyone

## TakeOwnership
- Method: **POST**.

Sets the provided _userOrGroup_ as the owner of the requested content.
 If the _userOrGroup_ is null, the current user will be the owner.
 The operation requires `TakeOwnership` permission.
 

### Exception
- ArgumentException: Thrown if the _userOrGroup_ parameter cannot be recognized
 as a path or id. The method also throws this exception if the identified content is not a User or a Group.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/TakeOwnership
DATA:
models=[{
  "userOrGroup": "_value_"
}]
```
### Parameters:
- **userOrGroup** (string): Path or id of the desired owner.

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: TakeOwnership

## TakeLockOver
- Method: **POST**.

Transfers the lock on the requested content to the target _user_.
 If the target _user_ is null, the target will be the current user.
 Current user must have `ForceCheckin` permission on the requested content.
 

### Exception
- ArgumentException: Thrown if the content is not checked out (unlocked).
 Also thrown if the _user_ cannot be recognized as a path or id of an existing
 `User`.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/TakeLockOver
DATA:
models=[{
  "user": "_value_"
}]
```
### Parameters:
- **user** (string): Path or id of the desired lock owner User.

### Return value:
`Ok` if the operation is executed successfully. (Type: string).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: ForceCheckin

## GetPermissions
- Method: **GET** or optionally POST.

Returns the effective permission information of the requested content grouped by identities.
 The output can be filtered by the _identity_ parameter.
 

 If the current user does not have `SeePermissions` right, the provided identity must be the current user
 in which case they will get only their own permission entries.
 This is a possible response:
 ``` 
 {
   "id": 1347,
   "path": "/Root/Content",
   "inherits": false,
   "entries": [
     {
       "identity": {
         "id": 7,
         "path": "/Root/IMS/BuiltIn/Portal/Administrators",
         "name": "Administrators",
         "displayName": "\"\"",
         "domain": "BuiltIn",
         "kind": "group",
         "avatar": null
       },
       "propagates": true,
       "permissions": {
         "See": {
           "value": "allow",
           "from": null,
           "identity": "/Root/IMS/BuiltIn/Portal/Administrators"
         },
         "Preview": {
           "value": "allow",
           "from": null,
           "identity": "/Root/IMS/BuiltIn/Portal/Administrators"
         },
         ...
         "Custom30": null,
         "Custom31": null,
         "Custom32": null
       }
     },
     {
       "identity": {
         "id": 8,
         "path": "/Root/IMS/BuiltIn/Portal/Everyone",
         ...
       },
       "propagates": false,
       "permissions": {
         ...
       }
     }
   ]
 }
```

### Exception
- Exception: Throws if the user doesn't have `SeePermissions` right
 and _identity_ is not the current user.

### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetPermissions?identity=/Root/IMS/BuiltIn/Portal/Everyone
```
or
```
POST /odata.svc/Root/...('targetContent')/GetPermissions
DATA:
models=[{
  "identity": "/Root/IMS/BuiltIn/Portal/Everyone"
}]
```
The `targetContent` can be any content type
### Parameters:
- **identity** (string) optional: Full path of an identity (group or user).
 

### Requirements:
- **AllowedRoles**: Everyone

## HasPermission
- Method: **GET** or optionally POST.

Returns whether the current or given user has the provided permissions on the requested content.
 The value is `true` if all requested permissions are allowed.

### Request example:

```
GET /odata.svc/Root/...('targetContent')/HasPermission?permissions=Open&permissions=RunApplication&user=/Root/IMS/BuiltIn/Portal/Visitor
```
or
```
POST /odata.svc/Root/...('targetContent')/HasPermission
DATA:
models=[{
  "permissions": ["Open", "RunApplication"], 
  "user": "/Root/IMS/BuiltIn/Portal/Visitor"
}]
```
The `targetContent` can be any content type
### Parameters:
- **permissions** (string[]): Permission name array.
- **user** (string) optional: Path of an existing user. If not specified,
 the current user's permission value will be returned.

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: SeePermissions

## SetPermissions
- Method: **POST**
- Icon: **"security"**.


### Request example:

```
POST /odata.svc/Root/...('targetContent')/SetPermissions
DATA:
models=[{
  "inheritance": "_value_"
}]
```
The `targetContent` can be any content type
### Parameters:
- **inheritance** (string): 

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Open, SeePermissions, SetPermissions
- **Scenarios**: WorkspaceActions, ListItem, ExploreActions, ContextMenu

## SetPermissions
- Method: **POST**
- Icon: **"security"**.


### Request example:

```
POST /odata.svc/Root/...('targetContent')/SetPermissions
DATA:
models=[{
  "r": _value_
}]
```
The `targetContent` can be any content type
### Parameters:
- **r** (SetPermissionsRequest): 

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Open, SeePermissions, SetPermissions
- **Scenarios**: WorkspaceActions, ListItem, ExploreActions, ContextMenu

## GetAcl
- Method: **GET** or optionally POST.


### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetAcl
```
The `targetContent` can be any content type
### Parameters:
There are no parameters.

### Requirements:
- **AllowedRoles**: Everyone

## GetPermissionOverview
- Method: **GET** or optionally POST.


### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetPermissionOverview?identity=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetPermissionOverview
DATA:
models=[{
  "identity": "_value_"
}]
```
### Parameters:
- **identity** (string): 


