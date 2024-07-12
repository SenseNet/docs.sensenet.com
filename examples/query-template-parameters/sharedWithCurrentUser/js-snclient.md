```javascript
const result = await repository.loadCollection({
  path: "/Root",
  oDataOptions: {
    query: `Type:Car AND ModifiedBy:@@CurrentUser@@`
  }
});
```
