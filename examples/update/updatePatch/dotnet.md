```csharp
var content = await Content.LoadAsync("/Root/Content/IT");
content["Index"] = 142;
await content.SaveAsync();
```
