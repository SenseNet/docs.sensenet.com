```javascript
store.dispatch(Actions.fetchContent("/Root/Content/IT", {
 query: "+TypeIs:Task +DueDate:@@NextWeek@@ +InTree:'@@CurrentWorkspace.Path@@'"
}))
```
