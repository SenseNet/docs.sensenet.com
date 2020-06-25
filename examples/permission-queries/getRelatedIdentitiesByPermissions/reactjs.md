```javascript
const response = await repository.security.getRelatedIdentitiesByPermissions({
  contentIdOrPath: '/Root/Content/IT',
  level: 'AllowedOrDenied', // or PermissionLevel.AllowedOrDenied from @sensenet/default-content-types package
  kind: 'Groups', // or IdentityKind.Groups from @sensenet/default-content-types package
  permissions: [ 'Open' ]
})
```
