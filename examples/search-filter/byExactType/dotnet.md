```csharp
await repository.LoadCollectionAsync(new LoadCollectionRequest
{
    Path = "/Root/Content/Cars",
    ChildrenFilter = "ContentType eq 'Car'"
}, cancel)
```
