```csharp
var content = await repository.LoadContentAsync("/Root/Content", cancel);
content["AllowedChildTypes"] = new[] { "ImageLibrary", "DocumentLibrary", "TaskList" };
await content.SaveAsync(cancel);
```
