```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content('IT')",
  {
    credentials: "include",
    method: "PUT",
    body:
      "models=[" +
      JSON.stringify({
        Manager: "/Root/IMS/Public/businesscat"
      }) +
      "]"
  }
);
```
