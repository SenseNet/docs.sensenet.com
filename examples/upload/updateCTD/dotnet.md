```csharp
// Both requests are performed in the background
await using var stream = new MemoryStream(Encoding.UTF8.GetBytes(ctd));
    await Content.UploadAsync("/Root/System/Schema/ContentTypes/GenericContent", "MyContentType", stream, "ContentType");
```
