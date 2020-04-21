```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT/Document_Library/Calgary?query=TypeIs%3AFile%20.SORT%3AModificationDate",
  { credentials: "include" }
);
```
