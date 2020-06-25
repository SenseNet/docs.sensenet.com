```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/IMS/Public('businesscat')/GetParentGroups",
  {
    credentials: "include",
    method: "POST",
    body:
      "models=[" +
      JSON.stringify({
        directOnly: true,
      }) +
      "]",
  }
);
```
