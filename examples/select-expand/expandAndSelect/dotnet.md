```csharp
await repository.LoadContentAsync(new LoadContentRequest
{
    Path = "/Root/Content/IT",
    Expand = new[] { "CreatedBy" },
    Select = new[] { "Name", "CreatedBy/Name" }
}, cancel)
```
