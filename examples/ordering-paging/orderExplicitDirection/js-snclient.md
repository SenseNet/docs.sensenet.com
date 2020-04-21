```javascript
const result = await repository.loadCollection({
    path: '/Root/Content/IT/Document_Library',
    oDataOptions: {
        orderby: [['Id', 'asc']]
      }
  })
```
