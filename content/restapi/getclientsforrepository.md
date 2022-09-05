---
title: GetClientsForRepository
metaTitle: "sensenet API - GetClientsForRepository"
metaDescription: "GetClientsForRepository"
---

## GetClientsForRepository
- Method: **GET** or optionally POST.

Returns external clients related to this repository.

### Request example:
The repository content.
```
GET /odata.svc/('Root')/GetClientsForRepository
```
Can only be called on the root content.
### Parameters:
There are no parameters.

### Return value:
A result object containing an array of clients. (Type: `object`).

### Requirements:
- **AllowedRoles**: Administrators

