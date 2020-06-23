```
url: "/OData.svc/Root/Content('IT')/GetRelatedItems",
type: 'POST',
data: "models=[" + JSON.stringify({
  "permissionLevel": "AllowedOrDenied",
  "memberPath": "/Root/IMS/Public/Editors",
  "permissions": ["Save"],
  "explicitOnly": true
}) + "]"
```
