```javascript
const response = await repository.load({
  idOrPath: '/Root/Content/IT',
  oDataOptions: {
    select: ['#CustomField']
  }
})
```
