```csharp
await repository.LoadContentAsync(new LoadContentRequest
{
    Path = "/Root/Content/Cars/OT1234",
    Expand = new[] { "CreatedBy" },
    Select = new[] { "Name", "CreatedBy/Name" }
}, cancel);
```
