```csharp
await repository.LoadContentAsync(new LoadContentRequest
{
    Path = "/Root/Content/Cars",
    Metadata = MetadataFormat.None // None, Minimal, Full (default)
}, cancel)
```
