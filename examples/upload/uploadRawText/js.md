```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT('Document_Library')/Upload",
  {
    credentials: "include",
    method: "POST",
    body: {
      ContentType: "File",
      FileName: "MyMarkdown.md",
      Overwrite: true,
      UseChunk: false,
      PropertyName: "Binary",
      FileText: " *** file text data ***"
    }
  }
);
```
