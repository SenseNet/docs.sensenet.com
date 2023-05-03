```csharp
var content = await repository.LoadContentAsync("/Root/Content/IT", cancel);
content["InheritableVersioningMode"] = new[] {3};
await content.SaveAsync(cancel);
```
