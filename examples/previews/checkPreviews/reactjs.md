```javascript
const result = await repository.executeAction({
  idOrPath: '/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx',
  name: 'CheckPreviews',
  method: 'POST',
  body: {
    generateMissing: true
  }
})
```
