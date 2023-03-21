```csharp
await repository.LoadContentAsync(new LoadContentRequest
{
    Path = "/Root/Content/IT",
    Expand = new[] { "AllowedChildTypes" }
}, cancel)
```
