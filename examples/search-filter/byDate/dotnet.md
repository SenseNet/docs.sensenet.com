```csharp
var result = await Content.LoadCollectionAsync(new ODataRequest
{
    Path = "/Root/Content/IT/Document_Library",
    Parameters = { { "$filter", "CreationDate gt datetime'2019-03-26T03:55:00'" } },
});
//foreach (var content in result)
//    Console.WriteLine(content.CreationDate);
```
