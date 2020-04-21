```javascript
const result = await repository.executeAction({
  idOrPath: '/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx',
  body: {
    page: 3,
    x: 100,
    y: 100,
    text: 'Lorem ipsum dolor sit amet'
    },
  name: 'AddPreviewComment',
  method: 'POST'
})
```
