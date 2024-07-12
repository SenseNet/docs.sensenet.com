```javascript
const result = await repository.loadCollection({
      path: '/Root/Content/Cars/OT1234',
      oDataOptions: {
        expand: ['CreatedBy/CreatedBy']
      }
    });

```
