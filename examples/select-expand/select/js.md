```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content('IT')?$select=DisplayName,Description",
  { credentials: "include" }
);
```
