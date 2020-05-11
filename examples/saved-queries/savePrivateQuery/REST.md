```
url: "/OData.svc/Root/Content/IT('Document_Library')/SaveQuery",
type: 'POST',
data: "models=[" + JSON.stringify({
    query:"%2BTypeIs:File %2BInTree:/Root/Content/IT",
    displayName: "My query",
    queryType: "Private"
  }) + "]"
```
