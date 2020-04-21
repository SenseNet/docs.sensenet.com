```
url: "/OData.svc/Root/Content('IT')/RemoveAllowedChildTypes",
type: 'POST',
data: "models=[" + JSON.stringify({
    "contentTypes": ["Task", "Image"]
  }) + "]",
```
