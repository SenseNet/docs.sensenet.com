```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT('Document_Library')/SaveQuery",
  {
    credentials: "include",
    method: "POST",
    body:
      "models=[" +
      JSON.stringify({
        query: "+TypeIs:File +InTree:/Root/Content/IT",
        displayName: "Public query",
      }) +
      "]",
  }
);
```
