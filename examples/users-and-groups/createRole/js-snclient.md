```javascript
const result = await repository.post({
  parentPath: `/Root/IMS/Public`,
  contentType: 'Group',
  content: {
    Name: 'Developers',
    Members: [1001, 1002]
  },
})
```
