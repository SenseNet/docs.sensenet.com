```csharp
await repository.LoadCollectionAsync(new LoadCollectionRequest
{
    Path = "/Root/Content/IT/Document_Library",
    ChildrenFilter = "startswith(Name, 'Document') eq true"
}, cancel)
```
