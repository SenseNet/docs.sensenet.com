```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT/Document_Library/$metadata",
  { credentials: "include" }
);
const result = await response.text();
```
