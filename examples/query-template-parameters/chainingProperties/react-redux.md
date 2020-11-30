```javascript
store.dispatch(Actions.fetchContent("/Root/Content/IT", {
 query: "TypeIs:User +CreationDate:<@@CurrentUser.Manager.CreationDate@@"
}))
```
