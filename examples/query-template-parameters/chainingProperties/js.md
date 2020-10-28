```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/IMS?query=TypeIs%3AUser%20%2BCreationDate%253A%253C%40%40CurrentUser.Manager.CreationDate%40%40",
  { credentials: "include" }
);
```
