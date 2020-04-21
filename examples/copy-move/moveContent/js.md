```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT/Document_Library/Chicago('100Pages.pdf')/MoveTo",
  {
    credentials: "include",
    method: "POST",
    body:
      "models=[" +
      JSON.stringify({
        targetPath: "/Root/Content/IT/Document_Library/Munich",
      }) +
      "]",
  }
);
```
