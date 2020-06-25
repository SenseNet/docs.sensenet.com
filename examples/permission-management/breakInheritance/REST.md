```
url: "/OData.svc/Root/Content/IT('Document_Library')/SetPermissions",
type: 'POST',
data: "models=[" + JSON.stringify({
    "r":[{
      "identity":"/Root/IMS/Public/Editors",
      "inheritance":"break"
    }]
  }) + "]"
```
