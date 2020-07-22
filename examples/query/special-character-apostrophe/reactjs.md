```javascript
const result = await repository.loadCollection({
  path: "/Root/Content/IT",
  oDataOptions: {
    query: `InFolder:"/Root/Content/IT/(1+1):2"`
  }
});
```
