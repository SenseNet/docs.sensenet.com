```csharp
var req = new ODataRequest
{
    Path = "/Root/Content/IT",
    ActionName = "GetRelatedItemsOneLevel",
    Select = new[] { "Id", "Path", "Type" },
};
var body = @"models=[{
    ""permissionLevel"": ""AllowedOrDenied"",
    ""memberPath"": ""/Root/IMS/Public/Editors"",
    ""permissions"": [""Open""]}]";
var result = await RESTCaller.GetResponseStringAsync(req, HttpMethod.Post, body);
Console.WriteLine(result);
```
