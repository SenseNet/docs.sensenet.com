Under construction
```javascript
const result = await repository.loadCollection({
  path: "/Root/Content/IT",
  oDataOptions: {
    query: `TypeIs:User +CreationDate:<@@CurrentUser.Manager.CreationDate@@`
  }
});
```
