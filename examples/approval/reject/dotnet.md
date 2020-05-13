```csharp
var body = @"models=[{""rejectReason"": ""Reject reason""}]";
var result = await RESTCaller.GetResponseStringAsync(
    "/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx", "Reject", HttpMethod.Post, body);
Console.WriteLine(result);
```
