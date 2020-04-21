```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT?query=Name%3ABusinessPlan.docx",
  { credentials: "include" }
);
```
