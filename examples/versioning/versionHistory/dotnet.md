```csharp
var result = await RESTCaller.GetResponseStringAsync(
    "/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx", "Versions", HttpMethod.Get);
Console.WriteLine(result);
```
