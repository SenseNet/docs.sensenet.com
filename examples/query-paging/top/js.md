```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT?query=Type%3AFolder .TOP%3A10",
  { credentials: "include" }
);
```
