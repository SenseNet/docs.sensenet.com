```csharp
await repository.LoadCollectionAsync(new LoadCollectionRequest
{
    Path = "/Root/Content/Cars",
    ChildrenFilter = "startswith(DisplayName, 'Toyota') eq true"
}, cancel)
```
