```csharp
dynamic content = await RESTCaller.GetContentAsync(new ODataRequest
{
    Path = "/Root/Content/IT",
    Select = new[] { "DisplayName", "Description" }
});
//Console.WriteLine(content.DisplayName);
```
