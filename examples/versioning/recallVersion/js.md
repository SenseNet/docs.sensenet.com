```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT/Document_Library/Calgary('BusinessPlan.docx')/RestoreVersion",
  {
    credentials: "include",
    method: "POST",
    body:
      "models=[" +
      JSON.stringify({
        version: "V1.0.A",
      }) +
      "]",
  }
);
```
