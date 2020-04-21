```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT?query=Description%3A%22Lorem%20amet%22~3",
  { credentials: "include" }
);
```
