```javascript
const response = await repository.security.setPermissions(
  '/Root/Content/IT/Document_Library',
  [{
    identity: '/Root/IMS/Public/Editors',
    localOnly: true
    AddNew: 'allow' // or PermissionValues.allow from @sensenet/default-content-types package
  }]
)
```
