```csharp
var body = @"models=[{
    ""page"": 3,
    ""x"": 100,
    ""y"": 100,
    ""text"": ""Lorem ipsum dolor sit amet""}]";
var result = await RESTCaller.GetResponseStringAsync(
    "/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx", "AddPreviewComment",
    HttpMethod.Post, body);

//Console.WriteLine(result);
```
