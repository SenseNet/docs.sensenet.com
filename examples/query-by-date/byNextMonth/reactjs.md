```javascript
const result = await repository.loadCollection({
  path: "/Root/Content/IT",
  oDataOptions: {
    query: `StartDate:>@NextMonth@`
  }
});
```
