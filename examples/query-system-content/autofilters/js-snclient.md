```javascript
const result = await repository.loadCollection({
  path: "/Root",
  oDataOptions: {
    query: `TypeIs:Folder .AUTOFILTERS:OFF`
  }
});
```
