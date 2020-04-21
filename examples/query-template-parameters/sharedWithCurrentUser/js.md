```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content?query=SharedWith%3A@@CurrentUser@@",
  { credentials: "include" }
);
```
