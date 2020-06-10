```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/IMS('Public')",
  {
    credentials: "include",
    method: "POST",
    body:
      "models=[" +
      JSON.stringify({
        __ContentType: "User",
        LoginName: "alba",
        Email: "alba@sensenet.com",
        Password: "alba",
        Enable: true,
      }) +
      "]",
  }
);
```
