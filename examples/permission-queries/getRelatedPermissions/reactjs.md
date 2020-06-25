```javascript
const response = await repository.security.getRelatedPermissions({
  contentIdOrPath: '/Root/Content/IT',
  level: 'AllowedOrDenied', // or PermissionLevel.AllowedOrDenied from @sensenet/default-content-types package
  memberPath: '/Root/IMS/Public/Editors',
  includedTypes: null,
  explicitOnly: true
})
```
