```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT/Document_library('MyField1')",
  {
    credentials: "include",
    method: "DELETE",
    body: JSON.stringify({
      permanent: true,
    }),
  }
);
```
