```javascript
store.dispatch(Actions.fetchContent("/Root/Content/IT", {
 query: "TypeIs:User +CreationDate:<@@CurrentWorkspace.Manager.CreationDate@@"
}))
```
