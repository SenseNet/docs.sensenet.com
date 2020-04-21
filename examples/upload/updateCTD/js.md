```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/System/Schema('ContentTypes')/Upload",
  {
    credentials: "include",
    method: "POST",
    body: {
      ContentType: "ContentType",
      FileName: "MyContentType.xml",
      Overwrite: true,
      UseChunk: false,
      PropertyName: "Binary",
      FileText: " *** file text data ***"
    }
  }
);
```
