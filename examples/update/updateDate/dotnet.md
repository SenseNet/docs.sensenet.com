```csharp
var content = await repository.LoadContentAsync("/Root/Content/IT/Calendar/Release", cancel);
content["StartDate"] = new DateTime(2020, 3, 4, 9, 30, 0);
await content.SaveAsync(cancel);
```
