```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT/Calendar('Release')",
  {
    credentials: "include",
    method: "PATCH",
    body:
      "models=[" +
      JSON.stringify({
        EventType: ["Demo","Meeting"]
      }) +
      "]"
  }
);
```
