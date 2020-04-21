// index.js:

```js
const repoInstance = new Repository(config);

<RepositoryContext.Provider value={repoInstance}>
  <App />
</RepositoryContext.Provider>,
```

// inside App component:

```typescript
const repository = useRepository();
```
