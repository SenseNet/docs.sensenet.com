```javascript
const result = await repository.load({
  idOrPath: '/Root/Content/Cars',
  oDataOptions: {
    select: ['Actions'],
    expand: ['Actions']
  }
})
```
