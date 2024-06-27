```javascript
const result = await repository.loadCollection({
  path: "/Root",
  oDataOptions: {
    query: `+TypeIs:Task +DueDate:>@@NextWeek@@ +AssignedTo:'@@CurrentUser@@'`
  }
});
```
