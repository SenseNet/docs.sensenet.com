```javascript
const result = await repository.loadCollection({
  path: "/Root",
  oDataOptions: {
    query: `+Color:White -Style:Sedan`
  }
});
```
