```csharp
await repository.LoadCollectionAsync(new LoadCollectionRequest
{
    Path = "/Root/Content/IT",
    LifespanFilter = FilterStatus.Enabled
}, cancel)
```
