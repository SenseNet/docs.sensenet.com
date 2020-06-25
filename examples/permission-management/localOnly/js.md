```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT('Document_Library')/SetPermissions",
  {
    credentials: "include",
    method: "POST",
    body:
      "models=[" +
      JSON.stringify({
        r: [
          {
            identity: "/Root/IMS/Public/Editors",
            localOnly: true,
            AddNew: "allow",
          },
        ],
      }) +
      "]",
  }
);
```
