```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT/Document_Library/Calgary('BusinessPlan.docx')/DeletePreviewComment",
  {
    credentials: "include",
    method: "POST",
    body:
      "models=[" +
      JSON.stringify({
        id: 1234
      }) +
      "]"
  }
);
```
