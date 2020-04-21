```javascript
const result = await repository.loadCollection({
  path: "/Root/Content/IT",
  oDataOptions: {
    query: `InTree:"/Root/Content/IT/Document_Library"`
  }
});
```
