---
title: Authentication
metaTitle: "sensenet API - Authentication"
metaDescription: "Authentication"
---

## GetClientRequestParameters
- Method: **GET** or optionally POST.


### Request example:

```
GET /odata.svc/('Root')/GetClientRequestParameters?context=_value_&clientType=_value_
```
or
```
POST /odata.svc/('Root')/GetClientRequestParameters
DATA:
models=[{
  "context": _value_, 
  "clientType": "_value_"
}]
```
Can only be called on the root content.
### Parameters:
- **context** (HttpContext): 
- **clientType** (string): 

### Requirements:
- **AllowedRoles**: All

## ValidateCredentials
- Method: **POST**.


### Request example:

```
POST /odata.svc/('Root')/ValidateCredentials
DATA:
models=[{
  "context": _value_, 
  "userName": "_value_", 
  "password": "_value_"
}]
```
Can only be called on the root content.
### Parameters:
- **context** (HttpContext): 
- **userName** (string): 
- **password** (string): 

### Requirements:
- **AllowedRoles**: All

