```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content('IT')/GetRelatedItems",
  {
    credentials: "include",
    method: "POST",
    body:
      "models=[" +
      JSON.stringify({
        permissionLevel: "AllowedOrDenied",
        memberPath: "/Root/IMS/Public/Editors",
        permissions: ["Save"],
        explicitOnly: true,
      }) +
      "]",
  }
);
```
