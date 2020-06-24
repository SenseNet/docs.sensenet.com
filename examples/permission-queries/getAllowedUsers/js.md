```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT/Document_Library/Chicago('BusinessPlan.docx')/GetAllowedUsers",
  {
    credentials: "include",
    method: "POST",
    body:
      "models=[" +
      JSON.stringify({
        permissions: ["Open"],
      }) +
      "]",
  }
);
```
