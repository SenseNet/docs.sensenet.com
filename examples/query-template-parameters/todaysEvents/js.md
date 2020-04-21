```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content?query=TypeIs%3ACalendarEvent AND StartDate%3A@@Today@@",
  { credentials: "include" }
);
```
