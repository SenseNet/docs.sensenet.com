```javascript
const result = await repository.loadCollection({
  path: "/Root/Content/Cars",
  oDataOptions: {
    query: `StartingDate:'2021-04-22'`
  }
});
```
