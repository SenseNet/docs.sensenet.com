```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content('IT')",
  {
    credentials: "include",
    method: "PATCH",
    body:
      "models=[" +
      JSON.stringify({
        InheritableApprovingMode: ["2"],
        InheritableVersioningMode: ["3"],
      }) +
      "]",
  }
);
```
