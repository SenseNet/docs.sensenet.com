```csharp
var fileText = "**** file text data ****";
await repository.UploadAsync(request: new UploadRequest
{
    ParentPath = "/Root/Content/Documents",
    ContentName = "MyFile.txt",
    ContentType = "File"
},
fileText,
cancel);
```
