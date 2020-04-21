```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content('IT')?$select=Actions&$expand=Actions&scenario=ContextMenu",
  { credentials: "include" }
);
```
