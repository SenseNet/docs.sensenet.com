```csharp
var result = await Content.LoadCollectionAsync(new ODataRequest
{
    Path = "/Root/Content/IT",
    LifespanFilter = FilterStatus.Enabled,
});
//foreach (var content in result)
//    Console.WriteLine(content.Name);
```
