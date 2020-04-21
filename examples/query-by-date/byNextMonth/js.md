```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content?query=StartDate%3A>@@NextMonth@@",
  { credentials: "include" }
);
```
