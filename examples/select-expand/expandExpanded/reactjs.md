```javascript
const result = await repository.load({
      idOrPath: '/Root/Content/IT',
      oDataOptions: {
        select: ['CreatedBy/FullName'],
        expand: ['CreatedBy/CreatedBy']
      }
    });

```
