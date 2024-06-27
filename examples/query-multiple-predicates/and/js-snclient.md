```javascript
const result = await repository.loadCollection({
  path: "/Root",
  oDataOptions: {
    query: `Style:Sedan AND Color:White`
  }
});
```
