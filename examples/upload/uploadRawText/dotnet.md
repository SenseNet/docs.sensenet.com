```csharp
var fileText = " *** file text data ***";
await Content.UploadTextAsync("/Root/Content/IT/Document_Library", "MyFile.txt",
    fileText,  CancellationToken.None, "File");
```
