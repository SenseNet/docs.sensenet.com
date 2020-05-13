```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT/Document_Library/Calgary('BusinessPlan.docx')/CheckIn",
  {
    credentials: "include",
    method: "POST",
    body:
      "models=[" +
      JSON.stringify({
        checkInComments: "Adding new contract",
      }) +
      "]",
  }
);
```
