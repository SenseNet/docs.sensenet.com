```
url: "/OData.svc/Root/Content('IT')/GetRelatedPermissions",
type: 'POST',
data: "models=[" + JSON.stringify({
  "level": "AllowedOrDenied",
  "member": "/Root/IMS/Public/Editors",
  "includedTypes": null,
  "explicitOnly": true
}) + "]"
```
