```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content?query=CreationDate%3A%3C@@CurrentDate.AddDays(-5)@@",
  { credentials: "include" }
);
```
