```javascript
const response = await repository.patch({
  idOrPath: '/Root/Content/Cars/OT1234',
  content: {
    Model: '126p',
    Color: 'Dark red'
  },
})
```
