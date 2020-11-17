---
title: Queries
metaTitle: "sensenet API - Queries"
metaDescription: "Queries"
---

## GetQueries
- Method: **GET** or optionally POST.


### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetQueries?onlyPublic=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetQueries
DATA:
models=[{
  "onlyPublic": _value_
}]
```
### Parameters:
- **onlyPublic** (bool) optional: 

### Requirements:
- **AllowedRoles**: Everyone

## SaveQuery
- Method: **POST**.


### Request example:

```
POST /odata.svc/Root/...('targetContent')/SaveQuery
DATA:
models=[{
  "query": "_value_", 
  "displayName": "_value_", 
  "queryType": "_value_"
}]
```
### Parameters:
- **query** (string): 
- **displayName** (string): 
- **queryType** (string): 

### Requirements:
- **AllowedRoles**: Everyone

