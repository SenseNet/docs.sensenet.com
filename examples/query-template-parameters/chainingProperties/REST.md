```
https://dev.demo.sensenet.com/OData.svc/Root/IMS?query=TypeIs%3AUser +CreationDate%3A%3C@@CurrentUser.Manager.CreationDate@@

// the special characters should be url encoded
// the actual query here is ?query=TypeIs:User +CreationDate:<@@CurrentUser.Manager.CreationDate@@
```
