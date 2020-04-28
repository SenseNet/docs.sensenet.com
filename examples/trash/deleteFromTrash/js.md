```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Trash('TrashBag-20130403112917')/Delete",
  {
    credentials: "include",
    method: "POST",
    body: JSON.stringify({
      permanent: true,
    }),
  }
);
```
