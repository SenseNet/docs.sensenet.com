```javascript
const result = await repository.post({
  parentPath: `/Root/IMS/Public`,
  contentType: 'User',
  content: {
    LoginName: 'alba',
    Enable: true
  },
})
```
