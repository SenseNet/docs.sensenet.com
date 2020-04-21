```javascript
const result = await repository.loadCollection({
  path: "/Root/IMS/Public",
  oDataOptions: {
    query: `Manager:{{Name:'businesscat'}}`
  }
});
```
