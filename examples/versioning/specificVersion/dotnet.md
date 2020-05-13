```csharp
var req = new ODataRequest(ClientContext.Current.Server)
{
    Path = "/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx",
    Version = "V1.0.A"
};
dynamic content = await Content.LoadAsync(req);
Console.WriteLine(content.Version);
```
