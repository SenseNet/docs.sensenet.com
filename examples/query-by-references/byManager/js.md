```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/IMS/Public?query=Manager%3A{{Name%3A%27businesscat%27}}",
  { credentials: "include" }
);
```
