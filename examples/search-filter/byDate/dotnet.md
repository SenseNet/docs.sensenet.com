```csharp
await repository.LoadCollectionAsync(new LoadCollectionRequest
{
    Path = "/Root/Content/IT/Document_Library",
    ChildrenFilter = "CreationDate gt datetime'2019-03-26T03:55:00'"
}, cancel)
```
