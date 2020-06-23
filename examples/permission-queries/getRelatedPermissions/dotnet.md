```csharp
var body = @"models=[{
    ""permissionLevel"": ""AllowedOrDenied"",
    ""memberPath"": ""/Root/IMS/Public/Editors"",
    ""includedTypes"": null,
    ""explicitOnly"": true}]";
var result = await RESTCaller.GetResponseStringAsync(
   "/Root/Content/IT", "GetRelatedPermissions", HttpMethod.Post, body);
Console.WriteLine(result);
```
