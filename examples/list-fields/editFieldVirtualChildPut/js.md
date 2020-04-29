```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT/Document_Library/('MyField1')",
  {
    credentials: "include",
    method: "PUT",
    body:
      "models=[" +
      JSON.stringify({
        MinValue: 5,
        DisplayName: "My field 1",
      }) +
      "]",
  }
);
```
