---
title: Sharing
metaTitle: "sensenet API - Sharing"
metaDescription: "Sharing"
---

## GetSharing
- Method: **GET** or optionally POST.

Gets a list of all sharing records on a content.

### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetSharing
```
### Parameters:
There are no parameters.

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Save, SetPermissions

## Share
- Method: **POST**.

Shares a content with somebody.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/Share
DATA:
models=[{
  "token": "_value_", 
  "level": _value_, 
  "mode": _value_, 
  "sendNotification": _value_
}]
```
### Parameters:
- **token** (string): An identifier token: an email address, a username or a user or group id.
- **level** (SharingLevel): What permissions will the user get for the content.
- **mode** (SharingMode): Whether the content will be accessible for other users.
- **sendNotification** (bool): Whether a notification email should be sent to the target user.

### Return value:
A sharing record representing the new share. (Type: object).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Save, SetPermissions
- **Scenarios**: ContextMenu, BatchActions

## RemoveSharing
- Method: **POST**.

Remove a sharing record from a content.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/RemoveSharing
DATA:
models=[{
  "id": "_value_"
}]
```
### Parameters:
- **id** (string): Identifier of a sharing record.

### Return value:
Returns true if the system has found and removed the sharing record. (Type: object).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Save, SetPermissions

