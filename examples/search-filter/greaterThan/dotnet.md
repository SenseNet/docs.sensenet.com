```csharp
var result = await Content.LoadCollectionAsync(new ODataRequest
{
    Path = "/Root/Content/IT/Document_Library",
    Parameters = { { "$filter", "Id gt 11" } },
});
//foreach (var content in result)
//    Console.WriteLine(content.Id);
```
