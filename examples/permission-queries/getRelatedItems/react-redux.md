```javascript
store.dispatch(Actions.getRelatedItems(
  {
    contentIdOrPath: '/Root/Content/IT',
    level: "AllowedOrDenied",
    permissions: ['Save'],
    explicitOnly: true,
    member: '/Root/IMS/Public/Editors',
  }
))
```
