```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content('IT')/AddAllowedChildTypes",
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
