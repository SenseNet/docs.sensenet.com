```javascript
const result = await repository.post({
  parentPath: `/Root/Content/Cars`,
  contentType: 'Folder',
  content: {
    Name: 'New Cars',
  },
})
```
