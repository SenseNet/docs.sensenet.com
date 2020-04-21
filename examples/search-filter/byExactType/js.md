```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT/Document_Library?$filter=ContentType eq 'Folder'",
  { credentials: "include" }
);
```
