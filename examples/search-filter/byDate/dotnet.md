```csharp
await repository.LoadCollectionAsync(new LoadCollectionRequest
{
    Path = "/Root/Content/Cars",
    ChildrenFilter = "StartingDate gt datetime'2020-01-12T03:55:00'"
}, cancel)
```
