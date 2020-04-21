```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/odata.svc/('Root')/MoveBatch",
  {
    credentials: "include",
    method: "POST",
    body:
      "models=[" +
      JSON.stringify({
        targetPath: "/Root/Content/IT/Document_Library/Munich",
        paths: [
          "/Root/Content/IT/Document_Library/Chicago/100Pages.pdf",
          "/Root/Content/IT/Document_Library/Chicago/400Pages.pdf",
        ],
      }) +
      "]",
  }
);
```
