```javascript
const result = await repository.loadCollection({
  path: "/Root",
  oDataOptions: {
    query: "Name:'adm*'"
  }
});
```
