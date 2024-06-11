Under construction
```csharp
var content = await repository.LoadContentAsync("/Root/Content/IT", cancel);
content["Customers"] = new[] { "/Root/Customer1", "/Root/Customer2" };
await content.SaveAsync(cancel);
```
