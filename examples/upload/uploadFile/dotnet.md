```csharp
// Both requests are performed in the background
using (var fileStream = new FileStream(@"D:\Examples\MyFile.txt", FileMode.Open))
    await Content.UploadAsync("/Root/Content/IT/Document_Library", "MyFile.txt", fileStream, "File");
```
