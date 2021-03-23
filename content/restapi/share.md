---
title: Share
metaTitle: "sensenet API - Share"
metaDescription: "Share"
---

## Share
- Method: **POST**.

Shares a content with somebody.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/Share
DATA:
models=[{
  "token": _value_, 
  "level": _value_, 
  "mode": _value_, 
  "sendNotification": _value_
}]
```
### Parameters:
- **token** (`string`): An identifier token: an email address, a username or a user or group id.
- **level** (`SharingLevel`): What permissions will the user get for the content.
- **mode** (`SharingMode`): Whether the content will be accessible for other users.
- **sendNotification** (`bool`): Whether a notification email should be sent to the target user.

### Return value:
A sharing record representing the new share. (Type: `object`).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Save, SetPermissions
- **Scenarios**: ContextMenu, BatchActions

