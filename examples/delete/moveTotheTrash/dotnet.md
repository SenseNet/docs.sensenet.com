```csharp
var content = await Content.LoadAsync("/Root/Content/IT/Document_Library/Chicago/100Pages.docx");
await content.DeleteAsync(false);
```
