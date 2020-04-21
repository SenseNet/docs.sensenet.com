```javascript
const result = await repository.loadCollection({
      path: '/Root/Content/IT',
      oDataOptions: {
        select: ['CreatedBy/FullName'],
        expand: ['CreatedBy']
      }
    });

```

