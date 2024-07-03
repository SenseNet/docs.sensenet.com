Under construction
```javascript
const result = await repository.loadCollection({
  path: "/Root",
  oDataOptions: {
    query: `TypeIs:Task +CreationDate:<@@CurrentUser.Manager.CreationDate@@`
  }
});
```
