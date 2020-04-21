```javascript
store.dispatch(Actions.fetchContent("/Root/Content/IT", {
 query: "CreationDate:<@@CurrentDate.AddDays(-5)@@"
}))
```
