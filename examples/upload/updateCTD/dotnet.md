```csharp
await using var stream = new MemoryStream(Encoding.UTF8.GetBytes(ctd));
await repository.UploadAsync(
    request: new UploadRequest
    {
        ParentPath = "/Root/System/Schema/ContentTypes/GenericContent",
        ContentName = "MyContentType",
        ContentType = "ContentType"
    },
    stream,
    cancel);
```
