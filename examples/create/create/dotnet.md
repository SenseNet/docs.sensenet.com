```csharp
var content = repository.CreateContent("/Root/Content/Cars", "Folder", "New cars");
await content.SaveAsync(cancel);
```
