```javascript
store.dispatch(
  Action.loadContent("/Root/Content", {
    query: `+Type:Group +Members:{{Id:1163}} .AUTOFILTERS:OFF`,
    select: ["Workspace/DisplayName"],
    expand: ["Workspace"],
  })
);
```
