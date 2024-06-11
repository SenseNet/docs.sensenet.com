```csharp
var content = await repository.LoadContentAsync("/Root/Content/Cars/OT1234", cancel);
content["StartingDate"] = DateTime.Parse("1986-11-21");
await content.SaveAsync(cancel);
```
