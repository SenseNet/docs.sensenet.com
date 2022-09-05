---
title: GetPageCount
metaTitle: "sensenet API - GetPageCount"
metaDescription: "GetPageCount"
---

## GetPageCount
- Method: **POST**.

Gets the number of preview pages of a document. If preview generation
 is not yet started, this action will start the process in the background.

 In case previews are not yet available or not possible to generate them, this value will contain one of the
 following statuses:
 - NoProvider: -5
 - Postponed: -4
 - Error: -3
 - NotSupported: -2
 - InProgress: -1
 - EmptyDocument: 0

### Request example:

```
POST /odata.svc/Root/...('targetContent')/GetPageCount
```
The `targetContent` can be File
### Parameters:
There are no parameters.

### Return value:
Page count of a document or a status code. (Type: `int`).

### Requirements:
- **AllowedRoles**: Everyone

