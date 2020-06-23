```csharp
var result = await RESTCaller.GetResponseStringAsync(new ODataRequest
{
    Path = "/Root/Content/IT",
    ActionName = "GetRelatedIdentities",
    Select = new[] { "Id", "Path", "Type" },
    Parameters =
    {
        { "permissionLevel", "AllowedOrDenied" },
        { "identityKind", "Groups" }
    }
});
Console.WriteLine(result);
```
