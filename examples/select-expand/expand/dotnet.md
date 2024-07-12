```csharp
await repository.LoadContentAsync(new LoadContentRequest
{
    Path = "/Root/Content/Cars/OT1234",
    Expand = new[] { "CreatedBy" },
}, cancel)
```
