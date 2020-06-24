```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content('IT')/SetPermissions",
  {
    credentials: "include",
    method: "POST",
    body:
      "models=[" +
      JSON.stringify({
        r: [
          {
            identity: "/Root/IMS/Public/editormanatee",
            Save: "allow",
          },
        ],
      }) +
      "]",
  }
);
```
