---
title: Permissions
metaTitle: "sensenet API - Permissions"
metaDescription: "Permissions"
---

## GetRelatedIdentities
- Method: **GET** or optionally POST.

Returns users and groups that have explicit permissions on the given content or its subtree.

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
- **permissionLevel** (string): Filtering by permission level. It can be Allowed, Denied, AllowedOrDenied.
- **identityKind** (string): Filtering by identity kind. Valid values are: All, Users, Groups, OrganizationalUnits, UsersAndGroups, UsersAndOrganizationalUnits, GroupsAndOrganizationalUnits

### Return value:
_Content_ list containing related users and groups based on the _identityKind_ filter. (Type: IEnumerable&lt;Content>).

### Requirements:
- **AllowedRoles**: Everyone

## GetRelatedPermissions
- Method: **GET** or optionally POST.

Collects all permission settings on the given content and its subtree related to the specified user or group.
 The output is grouped by permission types and can be filtered by permission value or content type.

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
- **permissionLevel** (string): Filtering by permission value. It can be Allowed, Denied, AllowedOrDenied.
- **explicitOnly** (bool): Filter parameter for future use only. The currently allowed value is true.
- **memberPath** (string): Path of a group or user.
- **includedTypes** (string[]): Optional filter containing content type names.

### Return value:
An associative array containing the count of permission settings grouped by permissions. For example:
 { "See": 14, "Open": 5, "Save": 10, ...} (Type: IDictionary&lt;PermissionType, int>).

### Requirements:
- **AllowedRoles**: Everyone

## GetRelatedItems
- Method: **GET** or optionally POST.

Returns all content in the requested content's subtree that have permission settings
 filtered by permission value, user or group and a permission mask.

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
- **permissionLevel** (string): Filtering by permission value. It can be Allowed, Denied, AllowedOrDenied.
- **explicitOnly** (bool): Filter parameter for future use only. The currently allowed value is true.
- **memberPath** (string): Path of a group or user.
- **permissions** (string[]): Permission filter. Only those content will appear in the output that have permission settings that are listed in this list.

### Return value:
_Content_ list. (Type: IEnumerable&lt;Content>).

### Requirements:
- **AllowedRoles**: Everyone

## GetRelatedIdentitiesByPermissions
- Method: **GET** or optionally POST.

Returns users and groups that have explicit permissions on the given content or its subtree.

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
- **permissionLevel** (string): Filtering by permission level. It can be Allowed, Denied, AllowedOrDenied.
- **identityKind** (string): Filtering by identity kind. Valid values are: All, Users, Groups, OrganizationalUnits, UsersAndGroups, UsersAndOrganizationalUnits, GroupsAndOrganizationalUnits
- **permissions** (string[]): Filtering by permission type.

### Return value:
Filtered _Content_ list that have the provided permissions. (Type: IEnumerable&lt;Content>).

### Requirements:
- **AllowedRoles**: Everyone

## GetRelatedItemsOneLevel
- Method: **GET** or optionally POST.

Returns all content in the requested content's direct child collection that have permission settings
 filtered by permission value, user or group and a permission mask.

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
- **permissionLevel** (string): Filtering by permission value. It can be Allowed, Denied, AllowedOrDenied.
- **memberPath** (string): Path of a group or user.
- **permissions** (string[]): Only those content will appear in the output that have permission settings that are listed in this list.

### Return value:
Filtered _Content_ list that have the provided permissions. (Type: IEnumerable&lt;Content>).

### Requirements:
- **AllowedRoles**: Everyone

## GetAllowedUsers
- Method: **GET** or optionally POST.

Returns all users that have all given permission on the entity.
 Users will be included in the result set even if the permissions are granted on a group
 where they are members directly or indirectly.

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
- **permissions** (string[]): Only those users appear in the output that have permission settings
 in connection with the given permissions.

### Return value:
Filtered _Content_ list of the users that have the provided permissions. (Type: IEnumerable&lt;Content>).

### Requirements:
- **AllowedRoles**: Everyone

## GetPermissionInfo
- Method: **GET** or optionally POST.

Assembles an object containing identity information (basic fields and all groups), inherited and subtree permissions.
 The result object will contain permission infos only for the provided content.

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
- **identity** (string): Path of the related user.

### Return value:
A PermissionInfo object. (Type: object).

### Requirements:
- **AllowedRoles**: Everyone

## GetChildrenPermissionInfo
- Method: **GET** or optionally POST.

Assembles an object containing identity information (basic fields and all groups), inherited and subtree permissions.
 The result object will contain permission infos for the children of the requested content and not the root.

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
- **identity** (string): Path of the related user.

### Return value:
A PermissionInfo object. (Type: object).

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

Changes the permission inheritance on the requested content.
 

 After the `break` operation, all previous
 effective permissions will be  copied explicitly that are matched any of the given entry types.
 After the `unbreak` operation, the unnecessary explicit entries will be removed.
 The method is ineffective if the content's inheritance state matches the requested operation
 (`break` operation on broken inheritance or `unbreak` operation on not broken inheritance).

### Exception
- ArgumentException: Throws _ArgumentException_ if the _inheritance_ is
 invalid.

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
- **inheritance** (string): The inheritance value as string. Available values: "break" or "unbreak"

### Return value:
The requested resource. (Type: Content).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Open, SeePermissions, SetPermissions
- **Scenarios**: WorkspaceActions, ListItem, ExploreActions, ContextMenu

## SetPermissions
- Method: **POST**
- Icon: **"security"**.

Modifies the explicit permission set of the requested content.
 

 The given _r_ parameter is a _SetPermissionsRequest_ that has
 an array of the complex request objects.
 Every item (_SetPermissionRequest_) contains the followings:
 - identity: id or path of a user or group.
 - localOnly: optional bool value (default: false).
 - one optional property for all available permission types (See, Open, Save, etc.) that describes the desired
 permission value.
 

 The permission value can be:
 - "undefined" alias "u" or "0"
 - "allow" alias "a" or "1"
 - "deny" alias "d" or "2"
 

 The following request body sets some permissions for an user and a group.
 ``` 
 {
   r: [
     {identity:"/Root/IMS/BuiltIn/Portal/Visitor", OpenMinor:"allow", Save:"deny"},
     {identity:"/Root/IMS/BuiltIn/Portal/Owners", Save:"A"}
   ]
 }
```

 The following request body sets a local only Open permission for the Visitor.
 ``` 
 {r: [{identity:"/Root/IMS/BuiltIn/Portal/Visitor", localOnly: true, Open:"allow"}]}
```

### Exceptions
- ArgumentException: In case of invalid permission state.
- ContentNotFoundException: If the identity is not found in any request item.

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
- **r** (SetPermissionsRequest): A named array of `SetPermissionRequest` objects that describe the modifications.

### Return value:
The requested resource. (Type: Content).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Open, SeePermissions, SetPermissions
- **Scenarios**: WorkspaceActions, ListItem, ExploreActions, ContextMenu

## GetAcl
- Method: **GET** or optionally POST.

Returns the access control list representation of the requested content.

 The returned object contains information about the permission inheritance state of the content, and
 all related permissions.
 

### Example

 Here is an abbreviated and annotated return value example:
 ``` 
 {
   "id": 1347,                                 // Id of the requested content
   "path": "/Root/Content",                    // Path of the requested content
   "inherits": true,                           // Permission inheritance state
   "isPublic": true,                           // True if the Visitor has Open permission on the requested content.
   "entries": [                                // array of the combined (effective and explicit) entries
     {                                         // First entry
       "identity": {                           // Identity of the entry
         "id": 1,                              // Id of the identity content
         "path": "/Root/IMS/Public/johnny42",  // Path of the identity content
         "name": "Johnny42",                   //
         "displayName": "Johnny42",            //
         "domain": "Public",                   //
         "kind": "user",                       // simplified type: "user" or "group"
         "avatar": ""                          //
       },                                      //
       "ancestor": "/Root",                    // Path of the parent entry
       "inherited": true,                      // If true, this entry has not any explicit permission.
       "propagates": true,                     // This entry is inheritable or not (in other terminology: "localOnly")
       "permissions": {                        // Permissions as an associative array
         "See": {                              // "See" permission descriptor. The sub object is null if it is not set
           "value": "allow",                   // Permission value. Can be "allow", "deny"
           "from": "/Root"                     // Path of the content where this permission is explicitly granted.
         },                                    //
         "Open": {                             //
           "value": "allow",                   //
           "from": "/Root"                     //
         },                                    //
         "Publish": {                          //
           "value": "allow",                   // The "Publish" permission is allowed...
           "from": null                        // ... and granted on this content
         },
         ...
       }
     },
     ...
   ]
 }
```

### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetAcl
```
The `targetContent` can be any content type
### Parameters:
There are no parameters.

### Return value:
The access control list representation of the requested content. (Type: object).

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


