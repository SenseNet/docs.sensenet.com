```javascript
const result = await repository.post({
  parentPath: `/Root/Content/IT`,
  contentType: 'EventList',
  contentTemplate: 'Calendar',
  content: {
    DisplayName: 'Calendar',
    Index: 2
  },
})
```
