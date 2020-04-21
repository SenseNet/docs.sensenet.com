```javascript
const result = await repository.loadCollection({
  path: "/Root/Content/IT",
  oDataOptions: {
    query: `StartDate:'2019-02-15 09:30:00'`
  }
});
```
