```javascript
const response = await repository.executeAction({
  idOrPath: '/Root/Content/IT/Document_Library',
  name: 'EditField',
  method: 'POST',
  body: {
    Name: 'MyField1',
    MinValue: 3,
    MaxValue: 19,
  }
})
```
