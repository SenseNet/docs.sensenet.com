```
url: "/OData.svc/Root/Content('IT')/SetPermissions",
type: 'POST',
data: "models=[" + JSON.stringify({
    "r":[{
      "identity":"/Root/IMS/Public/editormanatee",
      "Save":"allow"
    }]
  }) + "]"
```
