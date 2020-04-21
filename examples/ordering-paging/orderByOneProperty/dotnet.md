```csharp
var result = await Content.LoadCollectionAsync(new ODataRequest
{
    Path = "/Root/Content/IT/Document_Library",
    Parameters = {{"$orderby", "DisplayName"}}
});
//foreach (var content in result)
//    Console.WriteLine(content.DisplayName);
```
