```csharp
await repository.LoadCollectionAsync(new LoadCollectionRequest
{
    Path = "/Root/Content/Cars",
    AutoFilters = FilterStatus.Disabled
}, cancel)
```
