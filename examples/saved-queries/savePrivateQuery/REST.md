```
url: "/OData.svc/Root/Content/IT('Document_Library')/SaveQuery",
type: 'POST',
data: "models=[" + JSON.stringify({
    query:"+TypeIs:File +InTree:/Root/Content/IT",
    displayName: "My query",
    queryType: "Private"
  }) + "]"
```
