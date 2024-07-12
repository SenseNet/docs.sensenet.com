```javascript
const result = await repository.loadCollection({
  path: "/Root",
  oDataOptions: {
    query: `TypeIs:Car .SKIP:3 .TOP:3`
  }
});
```
