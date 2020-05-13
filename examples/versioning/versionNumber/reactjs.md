```javascript
const response = await repository.load({
  idOrPath: `/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx`,
  oDataOptions: {
    select: 'Version',
  }
})
const version = response.d.Version
```
