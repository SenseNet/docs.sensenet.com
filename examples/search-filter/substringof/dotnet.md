```csharp
var result = await Content.LoadCollectionAsync(new ODataRequest
{
    Path = "/Root/Content/IT/Document_Library",
    Parameters = { { "$filter", "substringof('Lorem', Description) eq true" } },
});
//foreach (var content in result)
//    Console.WriteLine(content.Description);
```
