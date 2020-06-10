```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/IMS/Public('developers')?$select=Members/LoginName&$expand=Members",
  { credentials: "include" }
);
```
