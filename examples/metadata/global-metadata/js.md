```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/$metadata",
  { credentials: "include" }
);
const result = await response.text();
```
