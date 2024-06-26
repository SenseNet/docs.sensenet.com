```javascript
const result = await repository.loadCollection({
    path: '/Root/Content/Cars/AAKE452',
    oDataOptions: {
        select: ['Make', 'Model', 'Color']
      }
  })
```
