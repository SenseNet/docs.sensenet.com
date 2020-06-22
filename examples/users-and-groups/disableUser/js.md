```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/IMS/Public('editormanatee')",
  {
    credentials: "include",
    method: "PATCH",
    body:
      "models=[" +
      JSON.stringify({
        Enabled: false,
      }) +
      "]",
  }
);
```
