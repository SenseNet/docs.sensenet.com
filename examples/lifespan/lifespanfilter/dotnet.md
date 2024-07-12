```csharp
await repository.LoadCollectionAsync(new LoadCollectionRequest
{
    Path = "/Root/Content/Cars",
    LifespanFilter = FilterStatus.Enabled
}, cancel)
```
