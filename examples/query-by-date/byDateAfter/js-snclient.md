```javascript
const result = await repository.loadCollection({
  path: "/Root/Content/IT",
  oDataOptions: {
    query: `ModificationDate:>'2019-01-10'`
  }
});
```
