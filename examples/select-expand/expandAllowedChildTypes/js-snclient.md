```javascript
const result = await repository.loadCollection({
      path: '/Root/Content/IT',
      oDataOptions: {
        expand: ['AllowedChildTypes']
      }
    });
```
