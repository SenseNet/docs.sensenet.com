```javascript
await repository
  .executeAction({
    idOrPath: '/Root/Content',
    name: 'GetQueries',
    method: 'GET',
    oDataOptions: {
      onlyPublic: true,
    },
  })
```
