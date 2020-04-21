```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content?query=ModificationDate%3A@@Yesterday@@",
  { credentials: "include" }
);
```
