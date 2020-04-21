```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content?query=TypeIs%3AArticle .LIFESPAN%3AON",
  { credentials: "include" }
);
```
