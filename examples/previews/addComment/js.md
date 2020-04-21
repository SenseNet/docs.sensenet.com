```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT/Document_Library/Calgary('BusinessPlan.docx')/AddPreviewComment",
  {
    credentials: "include",
    method: "POST",
    body:
      "models=[" +
      JSON.stringify({
        page: 3,
        x: 100,
        y: 100,
        text: "Lorem ipsum dolor sit amet"
      }) +
      "]"
  }
);
```
