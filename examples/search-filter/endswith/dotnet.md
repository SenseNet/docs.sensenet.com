```csharp
var result = await Content.LoadCollectionAsync(new ODataRequest
{
    Path = "/Root/Content/IT/Document_Library",
    Parameters = { { "$filter", "endswith(Name, 'Library') eq true" } },
});
//foreach (var content in result)
//    Console.WriteLine(content.Id);
```
