```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT?query=(EventType%3ADemo AND EventType%3AMeeting) OR EventType%3ADeadline",
  { credentials: "include" }
);
```
