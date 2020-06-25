```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content('IT')/GetRelatedPermissions",
  {
    credentials: "include",
    method: "POST",
    body:
      "models=[" +
      JSON.stringify({
        permissionLevel: "AllowedOrDenied",
        memberPath: "/Root/IMS/Public/Editors",
        includedTypes: null,
        explicitOnly: true,
      }) +
      "]",
  }
);
```
