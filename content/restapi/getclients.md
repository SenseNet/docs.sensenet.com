---
title: GetClients
metaTitle: "sensenet API - GetClients"
metaDescription: "GetClients"
---

## GetClients
- Method: **GET** or optionally POST.

Returns clients related to the current repository. Only administrators will get
 all types. Regular users will only get external clients.
 

This method is intended for internal server-to-server communication.

### Request example:
The root content.
```
GET /odata.svc/('Root')/GetClients
```
Can only be called on the root content.
### Parameters:
There are no parameters.

### Return value:
A result object containing an array of clients. (Type: `object`).

### Requirements:
- **AllowedRoles**: Administrators

