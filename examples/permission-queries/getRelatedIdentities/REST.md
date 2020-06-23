```
url: "/OData.svc/Root/Content('IT')/GetRelatedIdentities",
type: 'POST',
data: "models=[" + JSON.stringify({
  "permissionLevel": "AllowedOrDenied",
  "identityKind": "Groups"
}) + "]"
```
