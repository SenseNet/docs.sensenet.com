```javascript
const result = await repository.load({
      idOrPath: '/Root/Content/IT',
      oDataOptions: {
        expand: ['AllowedChildTypes']
      }
    });
```
