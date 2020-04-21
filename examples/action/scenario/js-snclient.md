```javascript
const result = await repository.load({
      idOrPath: '/Root/Content/IT',
      oDataOptions: {
        select: ['Actions'],
        scenario: 'ContextMenu',
        expand: ['Actions']
      }
    })
```
