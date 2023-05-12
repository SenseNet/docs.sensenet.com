```csharp
var content = await repository.LoadContentAsync("/Root/Content/IT/Calendar/Release", cancel);
content["EventType"] = new[] { "Demo", "Meeting" };
await content.SaveAsync(cancel);
```
