```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content?query=CreationDate%3A@@PreviousYear@@",
  { credentials: "include" }
);
```
