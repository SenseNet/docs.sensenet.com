```csharp
var result = await Content.LoadCollectionAsync(new ODataRequest
{
    Path = "/Root/Content/IT/Document_Library",
    ChildrenFilter = "isof('Folder')",
});
//foreach (dynamic content in result)
//    Console.WriteLine(content.Type);
```
