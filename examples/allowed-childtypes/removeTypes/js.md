```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content('IT')/RemoveAllowedChildTypes",
  {
    credentials: "include",
    method: "POST",
    body:
      "models=[" +
      JSON.stringify({
        contentTypes: ["Task", "Image"],
      }) +
      "]",
  }
);
```
