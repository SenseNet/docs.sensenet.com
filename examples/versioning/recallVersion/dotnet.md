```csharp
var content = await repository.LoadContentAsync("/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx", cancel);
await content.RestoreVersionAsync("V1.0.A", cancel);
```
