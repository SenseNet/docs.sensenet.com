```csharp
var content = await Content.LoadAsync("/Root/Content/IT");
content["Customers"] = new[] { "/Root/Customer1", "/Root/Customer2" };
await content.SaveAsync();
```
