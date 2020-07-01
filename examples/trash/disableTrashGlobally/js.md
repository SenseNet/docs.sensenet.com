```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root('Trash')",
  {
    credentials: "include",
    method: "PATCH",
    body:
      "models=[" +
      JSON.stringify({
        IsActive: false,
      }) +
      "]",
  }
);
```
