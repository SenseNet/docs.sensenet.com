```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT?query=Type%3AFolder .SKIP%3A3 .TOP%3A3",
  { credentials: "include" }
);
```
