```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content('IT')?$expand=CreatedBy&$select=CreatedBy/FullName",
  { credentials: "include" }
);
```
