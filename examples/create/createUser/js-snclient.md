```javascript
const result = await repository.post({
  parentPath: `/Root/IMS/Public`,
  contentType: 'User',
  content: {
    LoginName: 'jsmith',
    Email: 'jsmith@example.com',
    Password: 'I8rRp2c9P0HJZENZcvlz',
    FullName: 'John Smith',
    Enabled: true
  },
})
```
