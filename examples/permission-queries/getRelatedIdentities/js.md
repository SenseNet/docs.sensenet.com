```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content('IT')/GetRelatedIdentities",
  {
    credentials: "include",
    method: "POST",
    body:
      "models=[" +
      JSON.stringify({
        permissionLevel: "AllowedOrDenied",
        identityKind: "Groups",
      }) +
      "]",
  }
);
```
