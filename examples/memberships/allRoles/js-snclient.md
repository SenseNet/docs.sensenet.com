```javascript
const result = await repository.load({
  idOrPath: "/Root/IMS/Public/devdog",
  oDataOptions: {
    select: ["AllRoles"],
    expand: ["AllRoles"],
  },
});
```
