```csharp
var content = await Content.LoadAsync("/Root/Content/IT/Calendar/Release");
content["EventType"] = new[] { "Demo", "Meeting" };
await content.SaveAsync();
```
