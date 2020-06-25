```javascript
const response = await repository.security.setPermissions(
  '/Root/Content/IT',
  [{
    identity: '/Root/IMS/Public/editormanatee',
    Save: 'allow' // or PermissionValues.allow from @sensenet/default-content-types package
  }]
)
```
