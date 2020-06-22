```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/IMS('Public')",
  {
    credentials: "include",
    method: "POST",
    body:
      "models=[" +
      JSON.stringify({
        __ContentType: "Group",
        Name: "Publishers",
        Members: [1155, 1156],
      }) +
      "]",
  }
);
```
