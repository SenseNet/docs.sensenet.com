```csharp
var result = await Content.LoadCollectionAsync(new ODataRequest
{
    Path = "/Root/Content/IT",
    Parameters = {{"enableautofilters", "true"}},
});
//foreach(var content in result)
//    Console.WriteLine(content.Name);
```
