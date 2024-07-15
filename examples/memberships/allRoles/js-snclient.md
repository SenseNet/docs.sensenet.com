```javascript
const result = await repository.load({
  idOrPath: "/Root/IMS/Public/John Doe",
  oDataOptions: {
    select: ["AllRoles"],
    expand: ["AllRoles"],
  },
});
```
