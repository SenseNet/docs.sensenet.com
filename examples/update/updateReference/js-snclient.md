```javascript
const response = await repository.patch({
  idOrPath: '/Root/Content',
  content: {
    Manager: 12345 // Id of the referenced content
  },
})
```
