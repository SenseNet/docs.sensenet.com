```csharp
var result = await Content.LoadCollectionAsync(new ODataRequest
{
    Path = "/Root/Content/IT/Document_Library",
    Parameters = {{"$orderby", "Id asc"}}
});
//foreach (var content in result)
//    Console.WriteLine(content.Id);
```
