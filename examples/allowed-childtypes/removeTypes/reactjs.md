```javascript
const result = await repository.executeAction({
  idOrPath: "/Root/Content/IT",
  name: "RemoveAllowedChildTypes",
  method: "POST",
  body: {
    contentTypes: ["Task", "Image"],
  },
});
```
