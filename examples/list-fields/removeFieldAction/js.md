```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT/('Document_Library')/DeleteField",
  {
    credentials: "include",
    method: "POST",
    body: "models=[" + JSON.stringify({ Name: "MyField1" }) + "]",
  }
);
```
