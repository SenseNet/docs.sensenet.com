```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content('IT')/DeleteBatch",
  {
    credentials: "include",
    method: "POST",
    body: JSON.stringify({
      paths: [
        "/Root/Content/IT/Document_Library/Chicago/100Pages.docx",
        "/Root/Content/IT/Document_Library/Chicago/VehicleLog.xlsx",
        "/Root/Content/IT/Document_Library/Chicago/SalesTraining.pptx",
        "/Root/Content/IT/Document_Library/Chicago/ComeCelebrate.pdf"
      ],
      permanent: false
    })
  }
);
```
