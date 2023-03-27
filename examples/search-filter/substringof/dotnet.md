```csharp
await repository.LoadCollectionAsync(new LoadCollectionRequest
{
    Path = "/Root/Content/IT/Document_Library",
    ChildrenFilter = "substringof('Lorem', Description) eq true"
}, cancel)
```
