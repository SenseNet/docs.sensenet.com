```javascript
const result = await repository.load({
  idOrPath: '/Root/Content/Cars',
  oDataOptions: {
    select: ['Actions'],
    scenario: 'ContextMenu',
    expand: ['Actions']
  }
})
```
