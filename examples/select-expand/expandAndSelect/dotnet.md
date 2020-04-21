```csharp
dynamic content = await RESTCaller.GetContentAsync(new ODataRequest
{
    Path = "/Root/Content/IT",
    Expand = new[] { "CreatedBy" },
    Select = new[] { "Name", "CreatedBy/Name" }
});
//Console.WriteLine(content.CreatedBy.Name);
```
