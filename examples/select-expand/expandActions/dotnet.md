```csharp
dynamic content = await RESTCaller.GetContentAsync(new ODataRequest
{
    Path = "/Root/Content/IT",
    Expand = new[] { "Actions" }
});
//Console.WriteLine(content.Actions.Count);
```
