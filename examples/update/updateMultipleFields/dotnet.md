```csharp
var content = await Content.LoadAsync("/Root/Content/IT");
content["Name"] = "NewName";
content["Index"] = 142;
await content.SaveAsync();
```
