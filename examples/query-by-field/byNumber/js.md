```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT?query=TaskCompletion%3A%3C50",
  { credentials: "include" }
);
```
