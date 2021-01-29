---
title: Office Online Editing
metaTitle: "sensenet API - Office Online Editing"
metaDescription: "Office Online Editing"
---

## GetWopiData
- Method: **GET** or optionally POST.


### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetWopiData?context=_value_&action=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetWopiData
DATA:
models=[{
  "context": _value_, 
  "action": "_value_"
}]
```
### Parameters:
- **action** (string): 

### Requirements:
- **RequiredPermissions**: Open

## WopiOpenView
- Method: **GET** or optionally POST
- Icon: **"office"**.


### Request example:

```
GET /odata.svc/Root/...('targetContent')/WopiOpenView
```
### Parameters:
There are no parameters.

### Requirements:
- **RequiredPermissions**: Open
- **RequiredPolicies**: WopiOpenView
- **Scenarios**: ContextMenu

## WopiOpenEdit
- Method: **GET** or optionally POST
- Icon: **"office"**.


### Request example:

```
GET /odata.svc/Root/...('targetContent')/WopiOpenEdit
```
### Parameters:
There are no parameters.

### Requirements:
- **RequiredPermissions**: Save
- **RequiredPolicies**: WopiOpenEdit
- **Scenarios**: ContextMenu

