```javascript
store.dispatch(Actions.getRelatedItemsOneLevel(
  {
    contentIdOrPath: '/Root/Content/IT',
    level: "AllowedOrDenied",
    permissions: ['Save'],
    member: '/Root/IMS/Public/Editors',
  }
))
```
