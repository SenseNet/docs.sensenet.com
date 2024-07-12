```csharp
await using var fileStream = new FileStream(@"D:\Examples\MyFile.txt", FileMode.Open);
await repository.UploadAsync(
    request: new UploadRequest
    {
        ParentPath = "/Root/Content/Documents",
        ContentName = "MyFile.txt",
        ContentType = "File"
    },
    fileStream,
    cancel);
```
