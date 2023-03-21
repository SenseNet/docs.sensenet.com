```csharp
await repository.LoadContentAsync("/Root/Content/IT", cancel)
// or
await repository.LoadContentAsync<MyContent>("/Root/Content/IT", cancel)
```
