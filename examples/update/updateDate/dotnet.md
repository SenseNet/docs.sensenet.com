```csharp
var content = await Content.LoadAsync("/Root/Content/IT/Calendar/Release");
content["StartDate"] = new DateTime(2020, 3, 4, 9, 30, 0);
await content.SaveAsync();
```
