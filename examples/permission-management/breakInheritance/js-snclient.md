```javascript
const response = await repository.security.setPermissions(
  '/Root/Content/IT/Document_Library',
  [{
    identity: '/Root/IMS/Public/Editors',
    inheritence: 'break' // or Inheritance.Break from @sensenet/default-content-types package
  }]
)
```
