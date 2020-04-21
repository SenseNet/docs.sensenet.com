```javascript
const result = await repository.loadCollection({
  path: "/Root/Content/IT",
  oDataOptions: {
    query: `Type:Folder .SKIP:3 .TOP:3`
  }
});
```
