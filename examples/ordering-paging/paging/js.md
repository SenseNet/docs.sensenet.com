```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT/Document_Library?$top3&skip=4",
  { credentials: "include" }
);
```
