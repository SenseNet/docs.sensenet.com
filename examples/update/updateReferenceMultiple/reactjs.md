```javascript
const response = await repository.patch({
  idOrPath: '/Root/Content/IT',
  content: {
    Customers: ['/Root/Customer1', '/Root/Customer2']
  },
})
```
