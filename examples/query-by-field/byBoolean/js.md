```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content?query=IsCritical%3Atrue",
  { credentials: "include" }
);
```
