```javascript
const options = {
  // create a repository with sn-client,
  // check the other tab for that
  repository,
  // create a custom root reducer or use the one from the sn-redux package
  rootReducer,
  // switching the logger on can come in really handy development time
  logger: true,
} as Store.CreateStoreOptions<any>
```
