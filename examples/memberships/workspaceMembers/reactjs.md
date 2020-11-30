```javascript
const result = await repository.loadCollection({
     path: '/Root/Content',
        oDataOptions: {
          query: `+Type:Group +Members:{{Id:1163}} .AUTOFILTERS:OFF`,
          select: ['Workspace/DisplayName'],
          expand: ['Workspace'],
        },
});
```
