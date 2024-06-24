```javascript
const result = await repository.loadCollection({
  path: "/Root/Content/Cars",
  oDataOptions: {
    query: `InTree:"/Root/Content/Cars"`
  }
});
```
