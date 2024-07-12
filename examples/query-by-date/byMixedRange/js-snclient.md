```javascript
const result = await repository.loadCollection({
  path: "/Root/Content/Cars",
  oDataOptions: {
    query: `StartingDate:['2010-01-01' TO '2016-01-01'}`
  }
});
```
