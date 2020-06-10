```javascript
const result = await repository.post({
  parentPath: `/Root/IMS/Public`,
  contentType: 'Group',
  content: {
    Name: 'Publishers',
    Members: [1155, 1156]
  },
})
```
