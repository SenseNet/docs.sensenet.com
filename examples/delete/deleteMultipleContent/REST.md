```
POST https://example.com/OData.svc/('Root')/DeleteBatch?metadata=no

models=[{
  "permanent":true,
  "paths":[
    "/Root/Content/Cars/AAXY123",
    "/Root/Content/Cars/AAXY852",
    "/Root/Content/Cars/AAXY246"
  ]
}]
```
