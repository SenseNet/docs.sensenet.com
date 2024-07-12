```javascript
const result = await repository.loadCollection({
  path: '/Root/Content/Cars',
  oDataOptions: {
    filter: "StartingDate gt datetime'2020-01-12T03:55:00'"
  }
})
```
