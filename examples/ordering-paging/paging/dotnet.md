```csharp
await repository.LoadCollectionAsync(new LoadCollectionRequest
{
    Path = "/Root/Content/Cars",
    Top = 3,
    Skip = 3
}, cancel)
```
