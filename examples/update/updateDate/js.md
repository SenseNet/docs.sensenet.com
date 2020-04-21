```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT/Calendar('Release')",
  {
    credentials: "include",
    method: "PATCH",
    body:
      "models=[" +
      JSON.stringify({
        StartDate: "2020-03-04T09:30:00.000Z"
      }) +
      "]"
  }
);
```
