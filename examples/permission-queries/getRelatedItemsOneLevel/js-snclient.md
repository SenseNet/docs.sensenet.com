```javascript
const response = await repository.security.getRelatedItemsOneLevel({
  contentIdOrPath: '/Root/Content/IT',
  level: 'AllowedOrDenied', // or PermissionLevel.AllowedOrDenied from @sensenet/default-content-types package
  member: '/Root/IMS/Public/Editors',
  permissions: ['Open']
})
```
