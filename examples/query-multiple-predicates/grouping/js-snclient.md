```javascript
const result = await repository.loadCollection({
  path: "/Root",
  oDataOptions: {
    query: `Color:White AND (Style:Sedan OR Price:<10000000)`
  }
});
```
