```javascript
const result = await repository.loadCollection({
  path: '/Root/Content/Cars',
  oDataOptions: {
    filter: "substringof('Supra', DisplayName) eq true"
  }
})
```
