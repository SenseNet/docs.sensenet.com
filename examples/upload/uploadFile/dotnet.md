```csharp
// Both requests are performed in the background
await using var fileStream = new FileStream(@"D:\Examples\MyFile.txt", FileMode.Open);
await repository.UploadAsync(
    request: new UploadRequest
    {
        ParentPath = "/Root/Content/IT/Document_Library",
        ContentName = "MyFile.txt",
        ContentType = "File"
    },
    fileStream,
    cancel);
```
