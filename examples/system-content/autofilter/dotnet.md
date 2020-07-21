```csharp
var result = await Content.LoadCollectionAsync(new ODataRequest
{
    Path = "/Root/Content/IT",
    AutoFilters = FilterStatus.Disabled,
});
//foreach(var content in result)
//    Console.WriteLine(content.Name);
```
