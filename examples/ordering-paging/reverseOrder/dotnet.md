```csharp
var result = await Content.LoadCollectionAsync(new ODataRequest
{
    Path = "/Root/Content/IT/Document_Library",
    Parameters = {{"$orderby", "CreationDate desc"}}
});
//foreach (var content in result)
//    Console.WriteLine(content.CreationDate);
```
