```csharp
dynamic content = await RESTCaller.GetContentAsync(new ODataRequest
{
    Path = "/Root/Content/IT",
    Expand = new[] { "AllowedChildTypes" }
});
//Console.WriteLine(content.AllowedChildTypes.Count);
```
