```javascript
const result = await repository.post({
  parentPath: `/Root/IMS/Public`,
  contentType: 'User',
  content: {
    LoginName: 'alba',
    Email: 'alba@sensenet.com',
    Password: 'alba',
    Enable: true
  },
})
```
