---
title: SaveQuery
metaTitle: "sensenet API - SaveQuery"
metaDescription: "SaveQuery"
---

## SaveQuery
- Method: **POST**.


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
- **query** (`string`): 
- **displayName** (`string`): 
- **queryType** (`string`): 
- **uiFilters** (`string`) optional: Technical data containing filter information.

### Requirements:
- **AllowedRoles**: Everyone

