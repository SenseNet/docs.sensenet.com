```csharp
var content = await repository.LoadContentAsync("/Root/Content/IT", cancel);
content["Manager"] = 12345;
await content.SaveAsync(cancel);
```
