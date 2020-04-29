```csharp
var result = await Content.LoadCollectionAsync(new ODataRequest
{
    Path = "/Root/Content/IT/Document_Library",
    Top = 3,
    Skip = 3
});
//foreach (var content in result)
//    Console.WriteLine(content.Name);
```
