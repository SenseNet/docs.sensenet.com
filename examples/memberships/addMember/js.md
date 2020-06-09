```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/IMS/Public('developers')/AddMembers",
  {
    credentials: "include",
    method: "POST",
    body:
      "models=[" +
      JSON.stringify({
        contentIds: [1155, 1157],
      }) +
      "]",
  }
);
```
