```csharp
dynamic content = await repository.LoadContentAsync("/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx", cancel);
var version = content.Version;
Console.WriteLine(version);
```
