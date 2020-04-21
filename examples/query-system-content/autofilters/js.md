```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT?query=Type%3AContentType .AUTOFILTERS%3AON",
  { credentials: "include" }
);
```
