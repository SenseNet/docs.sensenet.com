```csharp
dynamic developers = await RESTCaller.GetContentAsync(new ODataRequest
{
    Path = "/Root/IMS/Public/developers",
    IsCollectionRequest = false,
    Expand = new[] { "Members" },
    Select = new[] { "Members/LoginName" }
});
foreach (dynamic content in developers.Members)
{
    Console.WriteLine(content.LoginName);
}
```
