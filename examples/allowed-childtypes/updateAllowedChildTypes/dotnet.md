```csharp
var content = await Content.LoadAsync("/Root/Content/IT");
content["AllowedChildTypes"] = new[] {"ImageLibrary", "DocumentLibrary", "TaskList"};
await content.SaveAsync();
```
