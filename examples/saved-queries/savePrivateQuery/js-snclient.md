```javascript
await repository.executeAction({
  idOrPath: '/Root/Content',
  name: 'SaveQuery',
  method: 'POST',
  body: {
    query: '+TypeIs:File +InTree:/Root/Content/IT',
    displayName: 'My query',
    queryType: 'Private'
  },
})
```
