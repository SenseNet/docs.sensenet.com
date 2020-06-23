```
url: "/OData.svc/Root/Content('IT')/GetRelatedIdentitiesByPermissions",
type: 'POST',
data: "models=[" + JSON.stringify({
  "permissionLevel": "AllowedOrDenied",
  "identityKind": "Groups",
  "permissions": ["Open"]
}) + "]"
```
