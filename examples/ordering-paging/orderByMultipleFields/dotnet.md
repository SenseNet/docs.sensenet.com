```csharp
await repository.LoadCollectionAsync(new LoadCollectionRequest
{
    Path = "/Root/Content/Cars",
    OrderBy = new[] { "StartingDate desc", "DisplayName" }
}, cancel)
```
