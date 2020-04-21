```csharp
var postData = new Dictionary<string, object>
    { {"Manager", "/Root/IMS/Public/businesscat"} };
await RESTCaller.PutContentAsync("/Root/Content/IT", postData);
```
