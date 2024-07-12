```javascript
const result = await repository.loadCollection({
  path: "/Root/Content/Cars",
  oDataOptions: {
    query: "Type:Car AND Name:'AA?E642'"
  }
});
```
