```javascript
const response = await repository.load({
  idOrPath: '/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx',
  oDataOptions: {
    select: ['Locked', 'LockedBy'],
  }
})
const isLocked = response.d.Locked
```
