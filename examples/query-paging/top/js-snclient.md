```javascript
const result = await repository.loadCollection({
  path: "/Root",
  oDataOptions: {
    query: `TypeIs:Car .TOP:5`
  }
});
```
