```
url: "/OData.svc/Root/Content('IT')/GetRelatedPermissions",
type: 'POST',
data: "models=[" + JSON.stringify({
  "permissionLevel": "AllowedOrDenied",
  "memberPath": "/Root/IMS/Public/Editors",
  "includedTypes": null,
  "explicitOnly": true
}) + "]"
```
