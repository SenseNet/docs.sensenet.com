```csharp
var content = await Content.LoadAsync("/Root/Content/IT");
content["InheritableVersioningMode"] = new[] {3};
await content.SaveAsync();
```
