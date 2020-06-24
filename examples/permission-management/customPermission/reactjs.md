```javascript
const response = await repository.security.setPermissions(
  '/Root/Content/IT/Document_Library',
  [{
    identity: '/Root/IMS/Public/Editors',
    Custom01: 'allow' // or PermissionValues.allow from @sensenet/default-content-types package
  }]
)
```
