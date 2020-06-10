```javascript
const response = await repository.load({
  idOrPath: '/Root/IMS/Public/developers',
  oDataOptions: {
    select: ['Members/LoginName'],
    expand: ['Members']
  }
})
const { Members } = response.d
```
