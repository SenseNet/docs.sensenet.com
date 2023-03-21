```csharp
await repository.LoadCollectionAsync(new LoadCollectionRequest
{
    Path = "/Root/Content/IT",
    AutoFilters = FilterStatus.Disabled
}, cancel)
```
