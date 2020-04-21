```javascript
const result = await repository.loadCollection({
      path: "/Root/Content/IT",
      oDataOptions: {
        top: 3,
        skip: 4,
        inlineCount: "allpages"
      }
    });
```
