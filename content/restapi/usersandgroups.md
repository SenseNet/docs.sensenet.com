---
title: Users and Groups
metaTitle: "sensenet API - Users and Groups"
metaDescription: "Users and Groups"
---

## GetParentGroups
- Method: **GET** or optionally POST.


### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetParentGroups?directOnly=_value_
```
or
```
POST /odata.svc/Root/...('targetContent')/GetParentGroups
DATA:
models=[{
  "directOnly": _value_
}]
```
The `targetContent` can be Group, User
### Parameters:
- **directOnly** (bool): 

### Requirements:
- **AllowedRoles**: Everyone

## AddMembers
- Method: **POST**.

Adds the specified items to the members list of the given group _Content_.
 If the content is not a _Group_, an _InvalidOperationException_ will be thrown.

### Request example:
A _Content_ that should be a _Group_.
```
POST /odata.svc/Root/...('targetContent')/AddMembers
DATA:
models=[{
  "contentIds": [_item1_, _item2_]
}]
```
The `targetContent` can be Group
### Parameters:
- **contentIds** (int[]): An array of contentIds that represents the new members.

### Requirements:
- **AllowedRoles**: Everyone

## RemoveMembers
- Method: **POST**.

Removes the specified items from the members list of the given group _Content_.

### Request example:
A _Content_ that should be a _Group_.
```
POST /odata.svc/Root/...('targetContent')/RemoveMembers
DATA:
models=[{
  "contentIds": [_item1_, _item2_]
}]
```
The `targetContent` can be Group
### Parameters:
- **contentIds** (int[]): An array of contentIds that represents the members to remove.

### Requirements:
- **AllowedRoles**: Everyone

## CreateUserByProvider
- Method: **POST**.


### Request example:

```
POST /odata.svc/('Root')/CreateUserByProvider
DATA:
models=[{
  "context": _value_, 
  "provider": "_value_", 
  "userId": "_value_", 
  "claims": "_value_"
}]
```
Can only be called on the root content.
### Parameters:
- **context** (HttpContext): 
- **provider** (string): 
- **userId** (string): 
- **claims** (string): 

### Requirements:
- **AllowedRoles**: Administrators

## CreateLocalUser
- Method: **POST**.


### Request example:

```
POST /odata.svc/('Root')/CreateLocalUser
DATA:
models=[{
  "context": _value_, 
  "loginName": "_value_", 
  "password": "_value_", 
  "email": "_value_"
}]
```
Can only be called on the root content.
### Parameters:
- **context** (HttpContext): 
- **loginName** (string): 
- **password** (string): 
- **email** (string): 

### Requirements:
- **AllowedRoles**: Administrators

