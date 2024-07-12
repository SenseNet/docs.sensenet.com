```javascript
const result = await repository.loadCollection({
  path: "/Root/Content/Cars",
  oDataOptions: {
    query: "InFolder:/Root/Content/Cars AND IsFolder:true"
  }
});
```
