```javascript
const result = await repository.loadCollection({
  path: "/Root/Content/IT",
  oDataOptions: {
    query: `CreationDate:'2019-02-15'`
  }
});
```
