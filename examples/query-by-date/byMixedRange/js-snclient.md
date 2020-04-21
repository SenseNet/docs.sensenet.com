```javascript
const result = await repository.loadCollection({
  path: "/Root/Content/IT",
  oDataOptions: {
    query: `CreationDate:['2010-08-30' TO '2010-10-30'}`
  }
});
```
