```csharp
await repository.LoadContentAsync(new LoadContentRequest
{
    Path = "/Root/Content/Cars",
    Expand = new[] { "AllowedChildTypes" }
}, cancel)
```
