```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT('Document_Library')/Upload?create=1",
  {
    credentials: "include",
    method: "POST",
    body: {
      ContentType: "File",
      FileName: "sampledata.xlsx",
      Overwrite: true,
      UseChunk: true,
      PropertyName: "Binary"
    }
  }
);
```
