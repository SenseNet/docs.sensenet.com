```javascript
const result = await repository.loadCollection({
  path: "/Root/Content/IT",
  oDataOptions: {
    query: `DisplayName:"(1+1):2"`
  }
});
```
