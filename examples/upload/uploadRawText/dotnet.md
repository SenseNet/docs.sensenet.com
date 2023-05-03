```csharp
var fileText = " *** file text data ***";
await repository.UploadAsync(request: new UploadRequest
    {
        ParentPath = "/Root/Content/IT/Document_Library",
        ContentName = "MyFile.txt",
        ContentType = "File"
    },
    fileText,
    cancel);
```
