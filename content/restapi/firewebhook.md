---
title: FireWebHook
metaTitle: "sensenet API - FireWebHook"
metaDescription: "FireWebHook"
---

## FireWebHook
- Method: **POST**.

Fires the target webhook on the provided content for testing purposes.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/FireWebHook
DATA:
models=[{
  "path": _value_, 
  "eventType": _value_
}]
```
The `targetContent` can be WebHookSubscription
### Parameters:
- **path** (`string`): Target content path.
- **eventType** (`WebHookEventType`): Event type to simulate. Can be one of the available events: All, Create, Delete, Modify, Approve,
 Reject, Draft, Pending, CheckOut, MoveToTrash, RestoreFromTrash

### Return value:
The webhook subscription that was fired. (Type: `Content`).

### Requirements:
- **AllowedRoles**: Administrators

