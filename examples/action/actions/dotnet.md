```csharp
await repository.LoadContentAsync(new LoadContentRequest
{
    Path = "/Root/Content/Cars",
    Expand = new[] { "Actions" },
    Select = new[] { "Actions" },
}, cancel)
```
