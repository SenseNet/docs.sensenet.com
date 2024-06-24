```javascript
const result = await repository.loadCollection({
  path: '/Root/Content/Cars',
  oDataOptions: {
    select: ['CreatedBy/DisplayName'],
    expand: ['CreatedBy']
  }
});
```

