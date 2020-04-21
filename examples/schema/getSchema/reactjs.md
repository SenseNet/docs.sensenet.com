```javascript
// reloadSchema will call GetSchema and set it in the repository
await repository.reloadSchema()

// to get the schema result call executeAction on the repository
const schemas = await repository.executeAction({
      idOrPath: 'Root',
      name: 'GetSchema',
      method: 'GET',
      body: undefined,
    })
```
