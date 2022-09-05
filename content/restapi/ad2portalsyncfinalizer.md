---
title: Ad2PortalSyncFinalizer
metaTitle: "sensenet API - Ad2PortalSyncFinalizer"
metaDescription: "Ad2PortalSyncFinalizer"
---

## Ad2PortalSyncFinalizer
- Method: **POST**.

Finalizes an AD sync task for a user, group or organizational unit.
 This action is intended for internal use by the Task Management module.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/Ad2PortalSyncFinalizer
DATA:
models=[{
  "result": _value_
}]
```
### Parameters:
- **result** (`SnTaskResult`): Result of the AD sync task.


