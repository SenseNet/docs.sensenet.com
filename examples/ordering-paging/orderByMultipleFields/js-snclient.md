```javascript
const result = await repository.loadCollection({
  path: '/Root/Content/Cars',
  oDataOptions: {
      orderby: [['StartingDate', 'desc'], 'DisplayName', 'Name']
    }
})
```
