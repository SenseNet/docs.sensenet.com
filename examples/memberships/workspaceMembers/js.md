```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content?query=%2BType%3AGroup %2BMembers%3A{{1163}} .AUTOFILTERS%3AOFF&$select=Workspace/DisplayName&$expand=Workspace",
  {
    credentials: "include",
    method: "GET",
  }
);
```
