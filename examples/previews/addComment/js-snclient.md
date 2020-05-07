```javascript
const response = await repository.preview.addComment({
  idOrPath: '/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx',
  comment: {
    page: 3,
    x: 100,
    y: 100,
    text: 'Lorem ipsum dolor sit amet'
  }
})
```
