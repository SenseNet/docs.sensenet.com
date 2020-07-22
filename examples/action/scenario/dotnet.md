```csharp
dynamic content = await RESTCaller.GetContentAsync(new ODataRequest
{
    Path = "/Root/Content/IT",
    Expand = new[] { "Actions" },
    Select = new[] { "Actions" },
    Parameters = { { "scenario", "ContextMenu" } }
});
//foreach(var item in content.Actions)
//    Console.WriteLine(item.Name);
```
