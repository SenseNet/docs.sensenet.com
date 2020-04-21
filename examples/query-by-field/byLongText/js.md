```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT?query=Description%3A*company*",
  { credentials: "include" }
);
```
