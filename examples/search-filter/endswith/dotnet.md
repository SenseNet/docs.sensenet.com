```csharp
await repository.LoadCollectionAsync(new LoadCollectionRequest
{
    Path = "/Root/Content/Cars",
    ChildrenFilter = "endswith(DisplayName, 'Octavia') eq true"
}, cancel)
```
