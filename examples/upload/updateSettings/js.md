```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/System('Settings')/Upload",
  {
    credentials: "include",
    method: "POST",
    body: {
      ContentType: "Settings",
      FileName: "MyCustom.settings",
      Overwrite: true,
      UseChunk: false,
      PropertyName: "Binary",
      FileText: " *** file text data ***"
    }
  }
);
```
