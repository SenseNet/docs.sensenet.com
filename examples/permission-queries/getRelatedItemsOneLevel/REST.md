```
url: "/OData.svc/Root/Content('IT')/GetRelatedItemsOneLevel",
type: 'POST',
data: "models=[" + JSON.stringify({
  "permissionLevel": "AllowedOrDenied",
  "memberPath": "/Root/IMS/Public/Editors",
  "permissions": ["Open"]
}) + "]"
```
