```javascript
const result = await repository.executeAction({
  idOrPath: "/Root/Content/IT",
  name: "AddAllowedChildTypes",
  method: "POST",
  body: {
    contentTypes: ["Task", "Image"],
  },
});
```
