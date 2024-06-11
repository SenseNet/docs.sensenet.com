```csharp
await repository.DeleteContentAsync(new[]
{
    "/Root/Content/Cars/AAXY123",
    "/Root/Content/Cars/AAXY852",
    "/Root/Content/Cars/AAXY246"
}, true, cancel);
```
