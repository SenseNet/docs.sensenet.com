```
url: "/OData.svc/Root/Content('IT')/GetRelatedIdentitiesByPermissions",
type: 'POST',
data: "models=[" + JSON.stringify({
  "level": "AllowedOrDenied",
  "kind": "Groups",
  "permissions": ["Open"]
}) + "]"
```
