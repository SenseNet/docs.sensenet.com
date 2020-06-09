```csharp
var req = new ODataRequest
{
    Path = "/Root/Content/IT",
    ActionName = "GetRelatedIdentitiesByPermissions",
    Select = new[] { "Id", "Path", "Type" },
};
var body = @"models=[{
    ""permissionLevel"": ""AllowedOrDenied"",
    ""identityKind"": ""Groups"",
    ""permissions"": [""Save""]}]";
var result = await RESTCaller.GetResponseStringAsync(req, HttpMethod.Post, body);
Console.WriteLine(result);
```
