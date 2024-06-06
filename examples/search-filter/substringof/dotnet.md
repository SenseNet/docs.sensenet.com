```csharp
await repository.LoadCollectionAsync(new LoadCollectionRequest
{
    Path = "/Root/Content/Cars",
    ChildrenFilter = "substringof('Supra', DisplayName) eq true"
}, cancel)
```
