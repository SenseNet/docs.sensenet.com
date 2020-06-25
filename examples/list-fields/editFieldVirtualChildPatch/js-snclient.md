```javascript
const response = await repository.patch({
  idOrPath: '/Root/Content/IT/Document_Library/MyField1',
  content: {
    MinValue: 5,
    MaxValue: 20,
  }
})
```
