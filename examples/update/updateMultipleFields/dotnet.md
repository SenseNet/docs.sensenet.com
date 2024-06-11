```csharp
var content = await repository.LoadContentAsync("/Root/Content/Cars/OT1234", cancel);
content["Model"] = "126p";
content["Color"] = "Dark red";
await content.SaveAsync(cancel);
```
