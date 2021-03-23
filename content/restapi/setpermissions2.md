---
title: SetPermissions
metaTitle: "sensenet API - SetPermissions"
metaDescription: "SetPermissions"
---

## SetPermissions
- Method: **POST**
- Icon: **"security"**.

Modifies the explicit permission set of the requested content.
 

 The given _r_ parameter is a _SetPermissionsRequest_ object that has
 an array of permission request objects.
 Every item (_SetPermissionRequest_) contains the following properties:
 - identity: id or path of a user or group.
 - localOnly: optional bool value (default: false).
 - one optional property for all available permission types (See, Open, Save, etc.) that describes the desired
 permission value.
 

 The permission value can be:
 - "undefined" alias "u" or "0"
 - "allow" alias "a" or "1"
 - "deny" alias "d" or "2"
 

 The following request body sets some permissions for a user and a group.
 ``` 
 {
   r: [
     {identity:"/Root/IMS/BuiltIn/Portal/Visitor", OpenMinor:"allow", Save:"deny"},
     {identity:"/Root/IMS/BuiltIn/Portal/Owners", Save:"A"}
   ]
 }
```

 The following request body sets a local only Open permission for the Visitor.
 ``` 
 {r: [{identity:"/Root/IMS/BuiltIn/Portal/Visitor", localOnly: true, Open:"allow"}]}
```

### Exceptions
- ArgumentException: In case of invalid permission state.
- ContentNotFoundException: If the identity is not found in any request item.

### Request example:

```
POST /odata.svc/Root/...('targetContent')/SetPermissions
DATA:
models=[{
  "r": _value_
}]
```
The `targetContent` can be any content type
### Parameters:
- **r** (`SetPermissionsRequest`): A named array of `SetPermissionRequest` objects that describe the modifications.

### Return value:
The requested resource. (Type: `Content`).

### Requirements:
- **AllowedRoles**: Everyone
- **RequiredPermissions**: Open, SeePermissions, SetPermissions
- **Scenarios**: WorkspaceActions, ListItem, ExploreActions, ContextMenu

