```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT?query=+EventType%3ADemo +EventType%3AMeeting",
  { credentials: "include" }
);
```
