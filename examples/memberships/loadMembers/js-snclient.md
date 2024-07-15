```javascript
const result = await repository.load({
  idOrPath: '/Root/IMS/Public/Developers',
  oDataOptions: {
    select: ['Members/LoginName'],
    expand: ['Members']
  }
})
```
