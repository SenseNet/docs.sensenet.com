```csharp
dynamic content = await RESTCaller.GetContentAsync(new ODataRequest
{
    Path = "/Root/Content/IT",
    Expand = new[] { "CreatedBy/CreatedBy" },
});
//Console.WriteLine(content.CreatedBy.CreatedBy.Name);
```
