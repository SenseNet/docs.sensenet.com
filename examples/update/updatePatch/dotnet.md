```csharp
var content = await repository.LoadContentAsync("/Root/Content/IT", cancel);
content["Index"] = 142;
await content.SaveAsync(cancel);
```
