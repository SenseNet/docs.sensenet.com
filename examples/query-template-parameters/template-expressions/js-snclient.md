```javascript
const result = await repository.loadCollection({
  path: "/Root",
  oDataOptions: {
    query: `TypeIs:Task AND StartDate:<@@CurrentDate-5days@@`
  }
});
```
