```javascript
const response = await repository.patch({
  idOrPath: '/Root/Content/IT',
  content: {
    AllowedChildTypes: ['ImageLibrary','DocumentLibrary','TaskList'],
  },
})
```
