```javascript
const result = await repository.loadCollection({
  path: '/Root/Content/Cars',
  oDataOptions: {
    filter: 'Price gt 1000000'
  }
})
```
