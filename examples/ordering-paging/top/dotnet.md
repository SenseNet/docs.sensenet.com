```csharp
await repository.LoadCollectionAsync(new LoadCollectionRequest
{
    Path = "/Root/Content/IT/Document_Library",
    Top = 5,
}, cancel)
```
