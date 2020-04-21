```javascript
const result = await repository.loadCollection({
  path: "/Root/Content/IT",
  oDataOptions: {
    query: `Type:Folder .SORT:Name .REVERSESORT:Index`
  }
});
```
