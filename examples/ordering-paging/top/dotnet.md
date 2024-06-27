```csharp
await repository.LoadCollectionAsync(new LoadCollectionRequest
{
    Path = "/Root/Content/Cars",
    Top = 5,
}, cancel)
```
