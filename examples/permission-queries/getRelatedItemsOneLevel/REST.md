```
url: "/OData.svc/Root/Content('IT')/GetRelatedItemsOneLevel",
type: 'POST',
data: "models=[" + JSON.stringify({
  "level": "AllowedOrDenied",
  "member": "/Root/IMS/Public/Editors",
  "permissions": ["Open"]
}) + "]"
```
