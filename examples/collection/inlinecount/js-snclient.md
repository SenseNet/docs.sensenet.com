```javascript
const result = await repository.loadCollection({
  path: "/Root/Content/Cars",
  oDataOptions: {
    top: 3,
    skip: 4,
    inlineCount: "allpages",
  }
});
```
