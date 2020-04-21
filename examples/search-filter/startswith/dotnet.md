```csharp
var result = await Content.LoadCollectionAsync(new ODataRequest
{
    Path = "/Root/Content/IT/Document_Library",
    Parameters = { { "$filter", "startswith(Name, 'Document') eq true" } },
});
//foreach (var content in result)
//    Console.WriteLine(content.Name);
```
