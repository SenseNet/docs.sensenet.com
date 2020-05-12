```csharp
var body = @"models=[{""user"": ""12345""}]";
var result = await RESTCaller.GetResponseStringAsync(
    "/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx", "TakeLockOver", HttpMethod.Post, body);
Console.WriteLine(result);
```
