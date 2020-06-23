```
url: "/OData.svc/Root/Content('IT')/GetRelatedItems",
type: 'POST',
data: "models=[" + JSON.stringify({
  "level": "AllowedOrDenied",
  "member": "/Root/IMS/Public/Editors",
  "permissions": ["Save"],
  "explicitOnly": true
}) + "]"
```
