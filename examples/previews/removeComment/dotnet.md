```csharp
var body = @"models=[{
  ""id"": ""839ba802-d587-4153-b4e8-ccd4c593e1f4""}]";
var result = await RESTCaller.GetResponseStringAsync(
    "/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx", "DeletePreviewComment",
    HttpMethod.Post, body);

//Console.WriteLine(result);
```
