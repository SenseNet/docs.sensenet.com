```csharp
await repository.LoadContentAsync("/Root/Content/Cars", cancel);
// or
await repository.LoadContentAsync<Folder>("/Root/Content/Cars", cancel);
```
