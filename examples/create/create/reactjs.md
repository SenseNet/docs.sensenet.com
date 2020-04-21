```javascript
const result = await repository.post({
  parentPath: `/Root/Content/IT`,
  contentType: 'Folder',
  content: {
    Name: 'My new folder',
  },
})
```
