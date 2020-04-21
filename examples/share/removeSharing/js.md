```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content('IT')/RemoveSharing",
  {
    credentials: "include",
    method: "POST",
    body:
      "models=[" +
      JSON.stringify({
        id: "08c90820-bb36-42db-b7ac-125be8486c4e"
      }) +
      "]"
  }
);
```
