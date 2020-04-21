```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT?query=SharedBy%3A@@CurrentUser@@",
  { credentials: "include" }
);
```
