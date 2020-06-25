```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content('IT')/GetPermissions?identity=/Root/IMS/Public/Editors",
  {
    credentials: "include",
  }
);
```
