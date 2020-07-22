```csharp
var result = await Content.LoadCollectionAsync(new ODataRequest
{
    Path = "/Root/Content/IT/Document_Library",
    OrderBy = new[] { "ModificationDate desc", "DisplayName", "Name"}
});
//foreach (var content in result)
//    Console.WriteLine(content.Name);
```
