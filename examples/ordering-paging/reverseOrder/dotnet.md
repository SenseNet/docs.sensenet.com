```csharp
await repository.LoadCollectionAsync(new LoadCollectionRequest
{
    Path = "/Root/Content/IT/Document_Library",
    OrderBy = new[] { "CreationDate desc" }
}, cancel)
```
