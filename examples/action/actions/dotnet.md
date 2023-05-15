```csharp
dynamic content = await repository.LoadContentAsync(new LoadContentRequest
{
    Path = "/Root/Content/IT",
    Expand = new[] { "Actions" },
    Select = new[] { "Actions" },
}, cancel);

var actionNames = new List<string>();
foreach (var item in content.Actions)
    actionNames.Add(item.Name.ToString());
```
