```javascript
const result = await repository.post({
  parentPath: `/Root/Content`,
  contentType: 'EventList',
  contentTemplate: 'Calendar',
  content: {
    DisplayName: 'Calendar',
    Index: 2
  },
})
```
