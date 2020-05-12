```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT/Document_Library/Calgary('BusinessPlan.docx')?$select=Locked,LockedBy",
  { credentials: "include" }
);
```
