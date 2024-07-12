```csharp
await repository.LoadCollectionAsync(new LoadCollectionRequest
{
    Path = "/Root/Content/Cars",
    ChildrenFilter = "Price gt 1000000"
}, cancel)
```
