```javascript
const result = await repository.loadCollection({
    path: '/Root/Content/IT/Document_Library',
    oDataOptions: {
      filter: "CreationDate gt datetime'2019-03-26T03:55:00'"
    }
  })
```
