```javascript
const result = await repository.post({
  parentPath: `/Root/IMS/Public`,
  contentType: 'User',
  content: {
    LoginName: 'johndoe',
    Email: 'johndoe@sensenet.com',
    Password: 'JohnDoe36*',
    FullName: 'John Doe',
    Name: 'John Doe',
    Description: '30 years old',
    Enable: true
  },
})
```
