```csharp
var content = await repository.LoadContentAsync("/Root/Content/Cars/OT1234", cancel);
content["Style"] = new[] { "Roadster" };
await content.SaveAsync(cancel);
```
