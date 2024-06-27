```csharp
await repository.LoadContentAsync(11, cancel);
// or
await repository.LoadContentAsync<Folder>(11, cancel);
```
