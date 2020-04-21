```javascript
const result = await repository.loadCollection({
  path: "/Root/Content/IT",
  oDataOptions: {
    query: "Description:abbreviate~0.8"
  }
});
```
