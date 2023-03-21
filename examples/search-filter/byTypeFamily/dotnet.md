```csharp
await repository.LoadCollectionAsync(new LoadCollectionRequest
{
    Path = "/Root/Content/IT/Document_Library",
    ChildrenFilter = "isof('Folder')"
}, cancel)
```
