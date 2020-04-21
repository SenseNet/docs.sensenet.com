```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT?query=Type%3AFolder .SORT%3AName .SORT%3AIndex",
  { credentials: "include" }
);
```
