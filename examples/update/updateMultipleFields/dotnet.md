```csharp
var content = await repository.LoadContentAsync("/Root/Content/IT", cancel);
content["Name"] = "NewName";
content["Index"] = 142;
await content.SaveAsync(cancel);
```
