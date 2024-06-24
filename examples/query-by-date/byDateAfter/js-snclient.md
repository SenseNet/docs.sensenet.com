```javascript
const result = await repository.loadCollection({
  path: "/Root/Content/Cars",
  oDataOptions: {
    query: `StartingDate:>'2019-01-10'`
  }
});
```
