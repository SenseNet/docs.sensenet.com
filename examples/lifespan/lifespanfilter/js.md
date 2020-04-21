```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content('IT')?enablelifespanfilter=true",
  { credentials: "include" }
);
```
