```csharp
await repository.LoadCollectionAsync(new LoadCollectionRequest
{
    Path = "/Root/Content/Cars",
    OrderBy = new[] { "Price asc" }
}, cancel)
```
