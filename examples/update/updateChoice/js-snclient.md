```javascript
const response = await repository.patch({
  idOrPath: '/Root/Content/IT/Calendar/Release',
  content: {
    EventType: ['Demo','Meeting'],
  },
})
```
