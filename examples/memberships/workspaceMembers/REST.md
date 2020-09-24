```
url: "/OData.svc/Root/Content?query=+Type%3AGroup +Members%3A{{Id%3A1163}} .AUTOFILTERS%3AOFF&$select=Workspace/DisplayName&$expand=Workspace",
type: 'GET',

// the special characters should be url encoded
// the actual query here is ?query=+Type:Group +Members:{{Id:1163}} .AUTOFILTERS:OFF&$select=Workspace/DisplayName&$expand=Workspace"
```
