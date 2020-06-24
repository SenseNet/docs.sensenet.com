```javascript
const response = await repository.security.setPermissions(
  '/Root/Content/IT/Document_Library',
  [{
    identity: '/Root/IMS/Public/Editors',
    Delete: 'deny' // or PermissionValues.deny from @sensenet/default-content-types package
  }]
)
```
