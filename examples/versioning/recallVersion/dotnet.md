```csharp
var body = @"models=[{""version"": ""V1.0.A""}]";
var result = await RESTCaller.GetResponseStringAsync(
    "/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx", "RestoreVersion", HttpMethod.Post, body);
Console.WriteLine(result);
```
