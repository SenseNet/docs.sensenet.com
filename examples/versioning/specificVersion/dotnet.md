```csharp
var request = new LoadContentRequest
{
    Path = "/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx",
    Version = "V1.0.A"
};
dynamic content = await repository.LoadContentAsync(request, cancel);
Console.WriteLine(content.Version);
```
