```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/IMS/Public('devdog')?$select=DirectRoles&$expand=DirectRoles",
  {
    credentials: "include",
    method: "GET",
  }
);
```
