```csharp
await repository.LoadContentAsync(new LoadContentRequest
{
    Path = "/Root/Content/IT",
    Metadata = MetadataFormat.None
}, cancel)
```
