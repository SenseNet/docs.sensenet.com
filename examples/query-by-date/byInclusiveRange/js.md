```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content?query=CreationDate%3A['2010-08-30' TO '2010-10-30']",
  { credentials: "include" }
);
```
