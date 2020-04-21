```javascript
const result = await repository.loadCollection({
  path: "/Root/Content/IT",
  oDataOptions: {
    query: `InFolder:"(1+1):2"`
  }
});
```
