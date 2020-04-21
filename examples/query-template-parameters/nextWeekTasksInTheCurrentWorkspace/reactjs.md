```javascript
const result = await repository.loadCollection({
  path: "/Root/Content/IT",
  oDataOptions: {
    query: `+TypeIs:Task +DueDate:@@NextWeek@@ +InTree:'@@CurrentWorkspace.Path@@'`
  }
});
```
