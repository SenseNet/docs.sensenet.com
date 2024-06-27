```javascript
const result = await repository.loadCollection({
  path: "/Root/Content/Cars",
  oDataOptions: {
    query: `StartingDate:'2023-12-29 09:30:00'`
  }
});
```
