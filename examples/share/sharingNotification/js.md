```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content('IT')/Share",
  {
    credentials: "include",
    method: "POST",
    body:
      "models=[" +
      JSON.stringify({
        token: "alba@sensenet.com",
        level: "Edit",
        mode: "Private",
        sendNotification: false
      }) +
      "]"
  }
);
```
