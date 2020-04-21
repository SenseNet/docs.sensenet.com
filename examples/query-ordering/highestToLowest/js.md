```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT?query=Type%3AFolder .REVERSESORT%3AName",
  { credentials: "include" }
);
```
