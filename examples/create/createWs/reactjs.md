```javascript
const result = await repository.post({
  parentPath: `/Root/Content`,
  contentType: 'Workspace',
  content: {
    DisplayName: 'My workspace'
  },
})
```
