```javascript
const result = await repository.loadCollection({
  path: '/Root/Content/Cars',
  oDataOptions: {
    expand: ['CreatedBy'],
    select: ['CreatedBy/DisplayName']
  }
});
```

