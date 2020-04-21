```csharp
var content = await Content.LoadAsync("/Root/Content/IT");
content["Manager"] = 12345;
await content.SaveAsync();
```
