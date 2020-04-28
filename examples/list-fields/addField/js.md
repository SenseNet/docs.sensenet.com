```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT('Document_Library')",
  {
    credentials: "include",
    method: "POST",
    body:
      "models=[" +
      JSON.stringify({
        __ContentType: "IntegerFieldSetting",
        Name: "MyField1",
        DisplayName: "My Field 1",
        Compulsory: true,
        MinValue: 10,
      }) +
      "]",
  }
);
```
