```csharp
await repository.LoadCollectionAsync(new LoadCollectionRequest
{
    Path = "/Root/Content/IT/Document_Library",
    Top = 3,
    Skip = 3
}, cancel)
```
