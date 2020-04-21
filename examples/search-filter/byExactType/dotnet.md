```csharp
var result = await Content.LoadCollectionAsync(new ODataRequest
{
    Path = "/Root/Content/IT/Document_Library",
    Parameters = { { "$filter", "ContentType eq 'Folder'" } },
});
//foreach (dynamic content in result)
//    Console.WriteLine(content.Type);
```
