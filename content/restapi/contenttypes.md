---
title: Content Types
metaTitle: "sensenet API - Content Types"
metaDescription: "Content Types"
---

## AddAllowedChildTypes
- Method: **POST**.

Extends the requested content's AllowedChildTypes collection with the provided Content types.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/AddAllowedChildTypes
DATA:
models=[{
  "contentTypes": ["Task", "Event"]
}]
```
### Parameters:
- **contentTypes** (string[]): The extension.

### Return value:
Empty string. (Type: string).

### Requirements:
- **AllowedRoles**: Everyone

## RemoveAllowedChildTypes
- Method: **POST**.

Removes the specified Content types from the requested content's AllowedChildTypes collection.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/RemoveAllowedChildTypes
DATA:
models=[{
  "contentTypes": ["_item1_", "_item2_"]
}]
```
### Parameters:
- **contentTypes** (string[]): The items that will be removed.

### Return value:
Empty string. (Type: string).

### Requirements:
- **AllowedRoles**: Everyone

## CheckAllowedChildTypesOfFolders
- Method: **GET** or optionally POST.

Checks all containers in the requested subtree and returns all paths where AllowedChildTypes is empty.
 

 The response is a list of content paths where AllowedChildTypes is empty categorized by content type names.
 Here is an annotated example:
 ``` 
 {
   "Domain": [              // ContentType name
     "/Root/...",           // Path1
     "/Root/...",           // Path2
   ],
   "OrganizationalUnit": [  // ContentType name
     "/Root/..."            // Path1
   ]
 }
```

### Request example:

```
GET /odata.svc/Root/...('targetContent')/CheckAllowedChildTypesOfFolders
```
### Parameters:
There are no parameters.

### Return value:
A dictionary where the ContentType name is the key and a path list is the value. (Type: Dictionary&lt;string, List&lt;string>>).

### Requirements:
- **AllowedRoles**: Administrators, Developers

## GetAllContentTypes
- Method: **GET** or optionally POST.

Returns all content types.

### Request example:

```
GET /odata.svc/('Root')/GetAllContentTypes
```
Can only be called on the root content.
### Parameters:
There are no parameters.

### Return value:
Content list of all content types. (Type: IEnumerable&lt;Content>).

### Requirements:
- **AllowedRoles**: Everyone

## GetAllowedChildTypesFromCTD
- Method: **GET** or optionally POST.

Returns the list of content types that are allowed in the content type of the requested content.

### Request example:

```
GET /odata.svc/Root/...('targetContent')/GetAllowedChildTypesFromCTD
```
### Parameters:
There are no parameters.

### Return value:
Content list of content types. (Type: IEnumerable&lt;Content>).

### Requirements:
- **AllowedRoles**: Everyone

