```csharp
var body = @"models=[{
  ""generateMissing"": false}]";
var result = await RESTCaller.GetResponseStringAsync(
    "/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx", "CheckPreviews",
    HttpMethod.Post, body);

//Console.WriteLine(result);
```
