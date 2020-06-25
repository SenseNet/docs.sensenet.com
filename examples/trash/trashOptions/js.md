```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root('Trash')",
  {
    credentials: "include",
    method: "PATCH",
    body:
      "models=[" +
      JSON.stringify({
        SizeQuota: 20,
        BagCapacity: 100,
        MinRetentionTime: 14,
      }) +
      "]",
  }
);
```
