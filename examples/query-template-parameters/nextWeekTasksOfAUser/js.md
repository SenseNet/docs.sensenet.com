```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content?query=+TypeIs%3ATask +AssignedTo%3A'@@CurrentUser@@' +DueDate%3A@@NextWeek@@",
  { credentials: "include" }
);
```
