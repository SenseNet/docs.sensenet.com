```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/Odata.svc/Root/Content/IT/Document_Library/Chicago('BusinessPlan.docx')/GetPageCount",
  {
    credentials: "include",
    method: "POST",
    body: undefined
  }
);
```
