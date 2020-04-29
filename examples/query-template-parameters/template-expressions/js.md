```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content?query=CreationDate%3A>@@CurrentDate-5days)@@",
  { credentials: "include" }
);
```
