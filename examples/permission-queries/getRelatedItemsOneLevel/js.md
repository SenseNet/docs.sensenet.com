```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content('IT')/GetRelatedItemsOneLevel",
  {
    credentials: "include",
    method: "POST",
    body:
      "models=[" +
      JSON.stringify({
        permissionLevel: "AllowedOrDenied",
        memberPath: "/Root/IMS/Public/Editors",
        permissions: ["Open"],
      }) +
      "]",
  }
);
```
