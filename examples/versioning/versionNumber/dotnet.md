```csharp
dynamic content = await Content.LoadAsync("/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx");
var version = content.Version;
Console.WriteLine(version);
```
