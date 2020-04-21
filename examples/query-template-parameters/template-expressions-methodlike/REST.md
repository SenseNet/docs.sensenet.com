```javascript
https://dev.demo.sensenet.com/OData.svc/Root/Content?query=CreationDate%3A<@@CurrentDate.AddDays(-5)@@

// the special characters should be url encoded
// the actual query here is ?query=CreationDate:<@@CurrentDate.AddDays(-5)@@
```
