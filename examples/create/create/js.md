```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content('IT')",
  {
    credentials: "include",
    method: "POST",
    body:
      "models=[" +
      JSON.stringify({
        __ContentType: "Folder",
        DisplayName: "My new folder"
      }) +
      "]"
  }
);
```
