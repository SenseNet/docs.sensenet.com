```javascript
https://dev.demo.sensenet.com/OData.svc/Root/Content?query=+TypeIs%3ATask +AssignedTo%3A'@@CurrentUser@@' +DueDate%3A@@NextWeek@@

// the special characters should be url encoded
// the actual query here is ?query=+TypeIs:Task +DueDate:@@NextWeek@@ +AssignedTo:'@@CurrentUser@@'
```
