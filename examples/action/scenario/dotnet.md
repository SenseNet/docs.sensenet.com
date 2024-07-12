```csharp
dynamic content = await repository.LoadContentAsync(new LoadContentRequest
{
    Path = "/Root/Content/Cars",
    Expand = new[] { "Actions" },
    Select = new[] { "Actions" },
    Parameters = { { "scenario", "ContextMenu" } }
}, cancel);

var actionNames = new List<string>();
foreach (var item in content.Actions)
    actionNames.Add(item.Name.ToString());
```
