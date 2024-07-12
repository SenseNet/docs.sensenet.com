```csharp
var content = await repository.LoadContentAsync("/Root/Content/Cars/AAXX123", cancel);
content["Color"] = "Rosso Corsa";
await content.SaveAsync(cancel);
```
