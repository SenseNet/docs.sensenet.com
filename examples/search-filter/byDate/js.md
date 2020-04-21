```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT/Document_Library?$filter=CreationDate gt datetime'2019-03-26T03:55:00'",
  { credentials: "include" }
);
```
