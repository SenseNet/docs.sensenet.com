```javascript
store.dispatch(Actions.fetchContent("/Root/Content/IT", {
 query: "+TypeIs:Task +DueDate:@@NextWeek@@ +AssignedTo:'@@CurrentUser@@'"
}))
```
