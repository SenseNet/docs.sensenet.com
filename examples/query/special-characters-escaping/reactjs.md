```javascript
const result = await repository.loadCollection({
  path: "/Root/Content/IT",
  oDataOptions: {
    query: "InFolder:\(5\+5\)\:3"
  }
});
```
