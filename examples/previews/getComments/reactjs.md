```javascript
const result = await repository.executeAction({
  idOrPath: '/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx',
  oDataOptions: {
    page: 3,
  }
  name: 'GetPreviewComments',
  method: 'GET'
})
```
