```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/IMS/Public('devdog')?$select=AllRoles&$expand=AllRoles",
  {
    credentials: "include",
    method: "GET",
  }
);
```
