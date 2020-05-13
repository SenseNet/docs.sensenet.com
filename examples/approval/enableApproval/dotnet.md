```csharp
var content = await Content.LoadAsync("/Root/Content/IT");
content["InheritableApprovingMode"] = new[] { 2 };
content["InheritableVersioningMode"] = new[] { 3 };
await content.SaveAsync();
```
