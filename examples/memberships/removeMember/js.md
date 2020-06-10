```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/IMS/Public('developers')/RemoveMembers",
  {
    credentials: "include",
    method: "POST",
    body:
     data: "models=[" + JSON.stringify({
    'contentIds': [ 1157 ]
  }) + "]",
  }
);
```
