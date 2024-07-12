```csharp
var content = await repository.LoadContentAsync("/Root/Content", cancel);
content["Manager"] = 12345; // Id of the referenced content
await content.SaveAsync(cancel);
```
