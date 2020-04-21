```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content?query=+TypeIs%3ATask +InTree%3A'@@CurrentWorkspace.Path@@' +DueDate%3A@@NextWeek@@",
  { credentials: "include" }
);
```
