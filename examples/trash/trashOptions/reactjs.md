```javascript
const result = await repository.patch({
  idOrPath: `/Root/Trash`,
  content: {
    SizeQuota: 20,
    BagCapacity: 100,
    MinRetentionTime: 14
  },
})
```
