```javascript
const result = await repository.load({
  idOrPath: "/Root/IMS/Public/devdog",
  oDataOptions: {
    select: ["DirectRoles"],
    expand: ["DirectRoles"],
  },
});
```
