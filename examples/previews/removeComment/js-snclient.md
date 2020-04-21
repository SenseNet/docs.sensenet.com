```javascript
const result = await repository.executeAction({
  idOrPath: '/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx',
  body: {
    id: '1234'
  }
  name: 'DeletePreviewComment',
  method: 'POST'
})
```
