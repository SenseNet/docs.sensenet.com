```javascript
const result = await repository.loadCollection({
  path: '/Root/Content/Cars',
  oDataOptions: {
    filter: "endswith(DisplayName, 'Octavia') eq true"
  }
})
```
