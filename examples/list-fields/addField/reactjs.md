```javascript
const response = await repository.post({
  parentPath: '/Root/Content/IT/Document_Library',
  contentType: 'IntegerFieldSetting',
  content: {
    Name: "MyField1",
    DisplayName: "My Field 1",
    Compulsory: true,
    MinValue: 10,
  },
})
```
