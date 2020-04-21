```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT?query=Description%3Aabbreviate~0.8",
  { credentials: "include" }
);
```
