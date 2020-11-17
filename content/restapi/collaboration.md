---
title: Collaboration
metaTitle: "sensenet API - Collaboration"
metaDescription: "Collaboration"
---

## Approve
- Method: **POST**
- Icon: **"approve"**.

Approves the requested content. The content's version number will be the next major version according to
 the content's versioning mode.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/Approve
```
### Parameters:
There are no parameters.

### Return value:
The modified content. (Type: Content).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Save, Approve
- **RequiredPolicies**: VersioningAndApproval
- **Scenarios**: ListItem, ExploreActions, SimpleApprovableListItem, ContextMenu

## CheckIn
- Method: **POST**
- Icon: **"checkin"**.

Removes the exclusive lock from the requested content and persists the _checkInComments_
 if there is. The version number is changed according to the content's versioning mode.
 

### Exception
- Exception: An exception will be thrown if the _checkInComments_ is
 missing and the value of the requested content's `CheckInCommentsMode` is `Compulsory`.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/CheckIn
DATA:
models=[{
  "checkInComments": "Very good."
}]
```
### Parameters:
- **checkInComments** (string) optional: The modifier's comments.

### Return value:
The modified content. (Type: Content).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Save
- **RequiredPolicies**: VersioningAndApproval
- **Scenarios**: ListItem, ExploreActions, SimpleApprovableListItem, ContextMenu

## CheckOut
- Method: **POST**
- Icon: **"checkout"**.

Creates a new version of the requested content and locks it exclusively for the current user.
 The version number is changed according to the content's versioning mode.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/CheckOut
```
### Parameters:
There are no parameters.

### Return value:
The modified content. (Type: Content).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Save
- **RequiredPolicies**: VersioningAndApproval
- **Scenarios**: ListItem, ExploreActions, ContextMenu

## Publish
- Method: **POST**
- Icon: **"publish"**.

Publishes the requested content. The version number is changed to the next major version
 according to the content's versioning mode.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/Publish
```
### Parameters:
There are no parameters.

### Return value:
The modified content. (Type: Content).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Save, Publish
- **RequiredPolicies**: VersioningAndApproval
- **Scenarios**: ListItem, ExploreActions, SimpleApprovableListItem, ContextMenu

## Reject
- Method: **POST**.

Rejects the modifications of the requested content and persists the _rejectReason_
 if there is.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/Reject
DATA:
models=[{
  "rejectReason": "Rewrite please."
}]
```
### Parameters:
- **rejectReason** (string) optional: The reviewer's comments.

### Return value:
The modified content. (Type: Content).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Save
- **RequiredPolicies**: VersioningAndApproval

## UndoCheckOut
- Method: **POST**
- Icon: **"undocheckout"**.

Drops the last draft version of the requested content if there is. This operation is allowed only
 for the user who locked the content or an administrator with `ForceCheckin` permissions.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/UndoCheckOut
```
### Parameters:
There are no parameters.

### Return value:
The modified content. (Type: Content).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Save
- **RequiredPolicies**: VersioningAndApproval
- **Scenarios**: ListItem, ExploreActions, ContextMenu

## ForceUndoCheckOut
- Method: **POST**
- Icon: **"undocheckout"**.

Drops the last draft version of the requested content if there is. This operation is allowed only
 for users who have `ForceCheckin` permission on this content.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/ForceUndoCheckOut
```
### Parameters:
There are no parameters.

### Return value:
The modified content. (Type: Content).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Save, ForceCheckin
- **RequiredPolicies**: VersioningAndApproval
- **Scenarios**: ListItem, ExploreActions, ContextMenu

## RestoreVersion
- Method: **POST**
- Icon: **"restoreversion"**.

Restores an old existing version as the last version according to the content's versioning mode.
 The old version is identified by the _version_ parameter that can be in
 one of the following forms:
 - [major].[minor] e.g. "1.2"
 - V[major].[minor] e.g. "V1.2"
 - [major].[minor].[status] e.g. "1.2.D"
 - V[major].[minor].[status] e.g. "V1.2.D"
 

Note that [status] is not required but an incorrect value causes an exception.

### Exception
- Exception: Throws if the requested content version is not found.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/RestoreVersion
DATA:
models=[{
  "version": "_value_"
}]
```
### Parameters:
- **version** (string): The old version number.

### Return value:
The modified content. (Type: Content).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Save, RecallOldVersion

