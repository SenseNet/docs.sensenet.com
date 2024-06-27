```javascript
const result = await repository.load({
  idOrPath: '/Root/Content/Cars',
  oDataOptions: {
    expand: ['Actions'],
    select: ['Actions']
  }
})
```
