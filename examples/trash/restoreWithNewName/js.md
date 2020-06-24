```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Trash('TrashBag-20130403112917')/Restore",
  {
    credentials: "include",
    method: "POST",
    body:
      "models=[" +
      JSON.stringify({
        newname: true,
      }) +
      "]",
  }
);
```
