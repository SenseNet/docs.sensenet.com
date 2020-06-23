```csharp
var req = new ODataRequest
{
    Path = "/Root/Content/IT",
    ActionName = "GetPermissions",
    Parameters = { { "identity", "/Root/IMS/Public/Editors" } }
};
var result = await RESTCaller.GetResponseStringAsync(req);
```
