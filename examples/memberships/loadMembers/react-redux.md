```javascript
store.dispatch(
  Action.loadContent("/Root/IMS/Public/developers", {
    select: ["Members/LoginName"],
    expand: ["Members"],
  })
);
```
