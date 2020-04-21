```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT/Document_Library/Calgary('BusinessPlan.docx')/RegeneratePreviews",
  {
    credentials: "include",
    method: "POST",
    body: undefined
  }
);
```
