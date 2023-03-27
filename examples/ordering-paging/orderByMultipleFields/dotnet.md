```csharp
await repository.LoadCollectionAsync(new LoadCollectionRequest
{
    Path = "/Root/Content/IT/Document_Library",
    OrderBy = new[] { "ModificationDate desc", "DisplayName", "Name" }
}, cancel)
```
