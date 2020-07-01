```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content('IT')/HasPermission?user=/Root/IMS/Public/devdog&permissions=SeePermissions",
  {
    credentials: "include",
  }
);
```
