---
title: SaveQuery
metaTitle: "sensenet API - SaveQuery"
metaDescription: "SaveQuery"
---

## SaveQuery
- Method: **POST**.

Add or edit a saved content query.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/SaveQuery
DATA:
models=[{
  "query": _value_, 
  "displayName": _value_, 
  "queryType": _value_, 
  "uiFilters": _value_
}]
```
### Parameters:
- **query** (`string`): Query text.
- **displayName** (`string`): Display name for the saved query.
- **queryType** (`string`): Type of the query (Public or Private).
- **uiFilters** (`string`) optional: Technical data containing filter information.

### Return value:
The Query content. (Type: `object`).

### Requirements:
- **AllowedRoles**: Everyone

